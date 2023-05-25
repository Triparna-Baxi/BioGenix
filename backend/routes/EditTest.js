const express = require('express');
const Test = require('../models/Test');
const {User} = require("../models/User");
const bcrypt = require("bcrypt");
const {Token} = require("../models/token");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

const router = express.Router();

// Create
router.post('/', async (req, res) => {
  try {
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

    if(!user.isAdmin){

      return res
          .status(400)
          .send({ message: "you are not admin" });
    }

    const newTest = await Test.create(req.body.test);
    res.status(200).json(newTest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.post('/getTest',async (req, res) => {

  try {
    const result = await Test.find();
    console.log(result)
    res.send(result);
  } catch (err) {
    res.status(400);
  }
})
// Update
router.put('/:id', async (req, res) => {
  try {
    const updatedTest = await Test.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const deletedTest = await Test.findByIdAndDelete(req.params.id);
    if (!deletedTest) throw new Error('Test not found');
    res.json(deletedTest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
