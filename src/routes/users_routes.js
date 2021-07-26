const express = require("express");
const router = express.Router();

const { userCreate } = require("../controller/index");
console.log(userCreate);

router.post("/users", userCreate);

module.exports = router;
