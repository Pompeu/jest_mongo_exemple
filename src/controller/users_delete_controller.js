const { User } = require("../models");

const userUpdate = (req, res, next) => {
  return User.deleteOne({ _id: req.params.id })
    .then((removed) => {
      console.log(removed);
      res.status(204);
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
};

module.exports = userUpdate;
