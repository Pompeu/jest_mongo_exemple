const { sendMail } = require("../services");

module.exports = (req, res, next) => {
  res.locals.sendMailService = sendmail;
  next();
};
