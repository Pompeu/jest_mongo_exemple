const express = require("express");
const router = express.Router();

const {
  userCreate,
  userUpdate,
  userGetOne,
  userGetAll,
  userDeleteOne,
} = require("../controller/index");

router.post("/users", userCreate);
router.put("/users/:id", userUpdate);
router.get("/users/:id", userGetOne);
router.get("/users", userGetAll);
router.delete("/users/:id", userDeleteOne);

module.exports = router;
