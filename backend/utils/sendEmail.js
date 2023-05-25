
//sending mail to customer for login signup
const nodemailer=require("nodemailer");

module.exports=async(email, subject, text) =>
{
    try {
            const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            text: text
        });
        console.log("Email Sent Successfully");
    } catch (error) {
        console.log("Email Not Sent");
        console.log(error);

    }
}