const { User } = require("../models");

const userCreate = (req, res, next) => {
  return User.findOne({ _id: req.params.id })
    .then((foundUser) => {
      res.status(200).json(foundUser);
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
};

module.exports = userCreate;
