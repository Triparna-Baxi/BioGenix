//model for report pdf
const pdf=require('html-pdf');
const path=require('path');
const nodemailer=require('nodemailer');
const fs=require('fs');
const env=require('dotenv');
const pdfTemplate=require("../utils/document")
env.config();

exports.createPdf=(req,res)=>{
    
    pdf.create(pdfTemplate(req.body),{}).toFile('report.pdf',(err)=>{
        if(err){
            console.log(err);
        }
        res.send('pdf generated');
    })
}

exports.fetchPdf =(req,res) =>{
    res.sendFile(path.join(__dirname,'report.pdf'));
}

exports.sendPdf =(req,res) =>{
    console.log(req.body)
    let pathToAttachment = path.join(__dirname, 'report.pdf');

    let attachment = fs.readFileSync(pathToAttachment);

    let smtpTransport=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS
        },
    })

    smtpTransport.sendMail({
        from:process.env.EMAIL,
        to:req.body.email,
        subject:'Pathology Report',
        html:`Pdf Generate document, Thanks.`,
        attachments:[
            {
                content:attachment,
                filename:'report.pdf',
                type:'application/pdf',
                disposition:'attachment'
            }
        ]
        
        
    },function(error,info){
        if(error){
            console.log(error);
        }

        res.send("Mail of Report is Sent to your Email");
    })
}