const { User } = require("../../models");

const userDeleteOne = (req, res) => {
  return User.deleteOne({ _id: req.params.id })
    .then(() => res.status(204).end())
    .catch((err) => {
      return res.status(500).json(err.message);
    });
};

module.exports = userDeleteOne;
