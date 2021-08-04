const { User } = require("../../models");

const userUpdate = (req, res) => {
  return User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((updatedUser) => {
      res.status(202).json(updatedUser);
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
};

module.exports = userUpdate;
