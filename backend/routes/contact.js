//To establish contact between customer and admin
const Contact = require("../models/Contact");
const router = require("express").Router();
router.post("/",async (req, res) => {
    console.log(req.body)
    const newContact = new Contact(
        {
            name: req.body.name.toString(),
            email: req.body.email.toString(),
            message: req.body.message.toString(),
        }
    )
    try {
        const SavedContact = await newContact.save();
        res.status(201).json(SavedContact);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports=router
  