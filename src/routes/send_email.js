const express = require("express");
const router = express.Router();

const { sendMail } = require("../controller/index");
const { sendMailInject } = require("../middlewares/index");

router.post("/sendemail", sendMailInject, sendEmail);

module.exports = router;
