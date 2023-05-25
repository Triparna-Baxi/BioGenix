const router = require("express").Router();
const { User } = require("../models/User");
const Token = require("../models/token");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcrypt");
const { log } = require("console");

// send password link
router.post("/", async (req, res) => {
	console.log("s=-=-=-=-=-=-=-=-=-=-=-==");
	try {
		const emailSchema = Joi.object({
			email: Joi.string().email().required().label("Email"),
		});
		console.log("s1=-=-=-=-=-=-=-=-=-=-=-==");

		// const { error } = emailSchema.validate(req.body);
		// if (error)
		// 	return res.status(400).send({ message: error.details[0].message });

		let user = await User.findOne({ email: req.body.email });
		console.log("s2=-=-=-=-=-=-=-=-=-=-=-==");
log(user)
		if (!user)
			return res
				.status(409)
				.send({ message: "User with given email does not exist!" });
		console.log("s3=-=-=-=-=-=-=-=-=-=-=-==");

		let token = await Token.findOne({ userId: user._id });
		console.log("s3.2=-=-=-=-=-=-=-=-=-=-=-==");
		if (!token) {
			token = await new Token({
				userId: user._id,
				token: crypto.randomBytes(32).toString("hex"),
			}).save();
			console.log("s3.3=-=-=-=-=-=-=-=-=-=-=-==");


		}
		console.log("s4=-=-=-=-=-=-=-=-=-=-=-==");


		const url = `${process.env.BASE_URL}/api/password-reset/${user._id}/${token.token}/`;
		console.log("s5=-=-=-=-=-=-=-=-=-=-=-==");

		await sendEmail(user.email, "Password Reset", url);
		console.log("s6=-=-=-=-=-=-=-=-=-=-=-==");


		res
			.status(200)
			.send({ message: "Password reset link sent to your email account" });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// verify password reset link
router.get("/:id/:token", async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });
res.redirect("http://localhost:3000/password-reset")
		// res.status(200).send("Valid Url");
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

//  set new password
router.post("/:id/:token", async (req, res) => {
	try {
		const passwordSchema = Joi.object({
			password: passwordComplexity().required().label("Password"),
		});
		const { error } = passwordSchema.validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		if (!user.verified) user.verified = true;

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		user.password = hashPassword;
		await user.save();
		await token.remove();

		res.status(200).send({ message: "Password reset successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
