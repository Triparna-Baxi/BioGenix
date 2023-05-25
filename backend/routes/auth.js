const router = require("express").Router();
const {User} = require("../models/User");
const jwt = require("jsonwebtoken");
const sendEmail=require("../utils/sendEmail");
const {Token}=require("../models/token");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

//REGISTER
router.post("/Register", async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user)
            return res
                .status(409)
                .send({ message: "User with given email already Exist!" });
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
console.log("reg =-=-=-=-=-=-=");
        user= await new User({ ...req.body, password: hashPassword }).save();
       
        const token=await new Token({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex")
        }).save();
    
        const url=`${process.env.BASE_URL}/users/${user.id}/verify/${token.token}`;
        await sendEmail(user.email,"Verify Email",url);

        res.status(201).send({ message: "Email Sent to your account, please Verify." });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

//LOGIN

router.post('/Login', async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password" });

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" });

        if (!user.verified) {
            let token = await Token.findOne({ userId: user._id });
            if (!token) {
                token = await new Token({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex"),
                }).save();
                const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`;
                await sendEmail(user.email, "Verify Email", url);
            }

            return res
                .status(400)
                .send({ message: "An Email sent to your account please verify" });
        }

        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: "Logged in successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }

});

module.exports = router;