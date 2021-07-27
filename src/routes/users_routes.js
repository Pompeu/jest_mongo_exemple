const express = require("express");
const router = express.Router();

const { userCreate, userUpdate } = require("../controller/index");

router.post("/users", userCreate);
router.put("/users/:id", userUpdate);

module.exports = router;
