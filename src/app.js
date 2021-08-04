const express = require("express");
const logger = require("morgan");
const routes = require("./routes/index");
const conn = require("./config/mongo_conn");
const app = express();

conn();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes.users);

app.use(function (req, res, next) {
  console.log(req.url);
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

module.exports = app;
