const { User } = require("../models");

const userCreate = (req, res) => {
  return User.create(req.body)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
};

module.exports = userCreate;
