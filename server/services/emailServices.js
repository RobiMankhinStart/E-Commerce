const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "robileo47@gmail.com",
    pass: "nvww icnk fbof kczd",
  },
});

const sentVerificationEmail = async ({ email, subject, otp }) => {
  const info = await transporter.sendMail({
    from: '"Ecommerce" <robileo47@gmail.com>', // sender address
    to: email, // list of recipients
    subject: subject, // subject line

    html: `<b>your vefification otp is ${otp}</b>`, // HTML body
  });
};
module.exports = { sentVerificationEmail };
