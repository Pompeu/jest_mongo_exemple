const { User } = require("../models");

const userGetAll= (req, res, next) => {
  return User.find({})
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
};

module.exports = userGetAll;
