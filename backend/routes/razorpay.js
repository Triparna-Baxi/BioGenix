const router = require("express").Router();const shortid = require('shortid')// for generating token
const Razorpay = require('razorpay')
const {Appointment} = require("../models/Appointment");
const razorpay = new Razorpay({
    key_id: process.env.SECRET_ID,
    key_secret: process.env.SECRET_KEY
})

router.post('/verification/user', async (req, res) => {

    const oid = req.body.oid;

    const result = await Appointment.updateOne({oid: oid.toString().trim()}, {$set: {isPaymentDone: true}})
    console.log(result)
    res.json({status: 'ok'}) // sending https status 200 to razorpay servers
})

router.post('/verification', (req, res) => {
    // do a validation
    const secret = process.env.SECRET.toString(); // secret string
    // for generating hash
    const shasum = crypto.createHmac('sha256', secret)
    shasum.update(JSON.stringify(req.body))
    const digest = shasum.digest('hex')

    console.log(digest, req.body)

    if (digest === req.headers['x-razorpay-signature']) {
        console.log('request is legit')
        // process it
        const status = req.body.payload.payment.entity.captured;
        const oid = req.body.payload.payment.entity.order_id;
        if (status === true) {
            Appointment.updateOne({oid:oid},{$set :{isPaymentDone:true}})
        }
    } else {
        // pass it
    }
    res.json({status: 'ok'}) // sending https status 200 to razorpay servers
})


// for getting OrderID
router.post('/razorpay/:options', async (req, res) => {
    const amount = parseInt(req.params.options)
    const currency = 'INR'
    const receiptNo = shortid.generate()
    const options = {
        amount: amount * 100,
        currency,
        receipt: receiptNo,
    }
    try {
        // creating order in razorpay
        const response = await razorpay.orders.create(options)
        console.log(response.id)
        // entering data in database

        const result =await Appointment.updateOne({email:req.body.email.toString().trim() ,token:"new"},{$set :{oid:response.id,token:receiptNo}})
        console.log(result)
        // sending .json with orderid,currency,amount
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        })


    } catch (error) {
        console.log(error)
    }
})


module.exports = router;