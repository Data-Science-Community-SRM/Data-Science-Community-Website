const messageModel = require("../models/message");
const nodemailer = require("nodemailer");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dscommunitysmtpserver@gmail.com",
    pass: 'g}#?Tp"R8]',
  },
});
const mailOptions = {
  from: "dscommunitysmtpserver@gmail.com",
  to: "datasciencecommunitysrm@gmail.com",
  subject: "Knock Knock! Letter received!",
  html: { path: path.join(__dirname, "../", "message.html") },
};

exports.postData = async (req, res) => {
  try {
    const message = new messageModel({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      message: req.body.message,
    });

    const result = await message.save();
    if (result) {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.status(200).json({
        status: "OK",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "ERROR",
    });
  }
};
