
//for report pdf
const express = require("express");
const {createPdf, fetchPdf, sendPdf} = require("../models/pdfController");
const path = require("path");
const fs = require("fs");
const nodemailer = require("nodemailer");
const pdfRoute = express.Router();

pdfRoute.post('/createPdf', createPdf);
pdfRoute.get('/fetchPdf', fetchPdf);
pdfRoute.post('/sendPdf', (req, res) => {
    console.log(req.body)
    let pathToAttachment = path.join(__dirname, 'report.pdf');

    let attachment = fs.readFileSync(pathToAttachment);

    let smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        },
    })

    smtpTransport.sendMail({
        from: process.env.EMAIL,
        to: req.body.email,
        subject: 'Pathology Report',
        html: `Pdf Generate document, Thanks.`,
        attachments: [
            {
                content: attachment,
                filename: 'report.pdf',
                type: 'application/pdf',
                disposition: 'attachment'
            }
        ]


    }, function (error, info) {
        if (error) {
            console.log(error);
        }
        res.send("Mail of Report is Sent to your Email");
    })
})

module.exports = pdfRoute;