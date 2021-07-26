const userCreate = (req, res, next) => {
  return res.status(201).json(req.body);
};

module.exports = userCreate;
