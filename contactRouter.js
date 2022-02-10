const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config();

router.get("/", (req, res) => res.send({ msg: "Sending form using POST" }));

router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  var mailOptions = {
    from: email, // from the person's email sending it,
    to: "Nandebija@gmail.com", // this should be my email address
    subject: "New message from portfolio",
    text: `${name}has messaged you, saying :
        ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).send({ msg: "Email could not be sent" + error });
    } else {
      console.log("Email sent: " + info.response);
      res.send({ msg: "Message sent successfully" });
    }
  });
});

module.exports = router;
