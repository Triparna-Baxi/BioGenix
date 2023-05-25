//for customer feedback
const Feedback = require("../models/Feedback");
const router = require("express").Router();
router.post("/",async (req, res) => {
    console.log(req.body)
    const newFeedback = new Feedback(
        {
            name: req.body.name.toString(),
            feedback: req.body.feedback.toString(),
            rating: parseFloat(req.body.rating),
        }
    )
    try {
        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports=router