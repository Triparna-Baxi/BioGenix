//All routes in backend

const express = require("express");
const app = express();
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const razorpayRoute = require("./routes/razorpay");
const feedbackRoute = require("./routes/feedback");
const contactRoute=require("./routes/contact")
const appointmentRoute=require("./routes/appointment");
const editTestRoute=require("./routes/EditTest")
const cors = require("cors");
const pdfRoute = require("./routes/pdfRoute");
const ForgotPassword = require("../backend/routes/passwordReset");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull !"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/feedback",feedbackRoute);
app.use("/api/appointment", appointmentRoute);
app.use("/api/checkout", razorpayRoute);
app.use("/users",userRoute);
app.use("/api/contact",contactRoute);
app.use("/api/tests",editTestRoute);
app.use("/api/report",pdfRoute);
app.use("/api/password-reset",ForgotPassword);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});