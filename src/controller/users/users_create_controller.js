const { User } = require("../../models");

const userCreate = (req, res) => {
  return User.create(req.body)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((err) => {
      if (err.message.includes("duplicate key error")) {
        return res.status(409).json({ errors: ["this mail is in use!"] });
      }

      return res.status(500).json({ errors: ["internal server error"] });
    });
};

module.exports = userCreate;
