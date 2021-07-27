const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: "string",
    email: "string",
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", schema);
