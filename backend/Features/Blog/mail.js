const nodemailer = require("nodemailer");
const emailusername = "frtoons7012@gmail.com";
const emailpassword = "isavybgsnvqmmfsx";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: emailusername,
    pass: emailpassword,
  },
  host: "smtp.gmail.com",
});

module.exports = transporter;
