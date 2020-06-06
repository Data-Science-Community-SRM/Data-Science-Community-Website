const router = require("express").Router();

const adminControllers = require("../controllers/admin");

router.post("/contact-us", adminControllers.postData);

module.exports = router;
