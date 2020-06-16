const messageModel = require("../models/message");
const nodemailer = require("nodemailer");
const path = require("path");
const ejs = require("ejs");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

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
      const dynamicMail = await ejs.renderFile(
        path.join(__dirname, "../", "views", "message.ejs"),
        {
          name: req.body.name,
          message: req.body.message,
          number: req.body.number,
          email: req.body.email,
        }
      );
      transporter.sendMail(
        {
          from: "dscommunitysmtpserver@gmail.com",
          to: "datasciencecommunitysrm@gmail.com",
          subject: "Knock Knock! Letter received!",
          html: dynamicMail,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        }
      );
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
