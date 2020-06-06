const messageModel = require("../models/message");

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
