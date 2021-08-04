const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: "string",
    email: { type: String, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", schema);
