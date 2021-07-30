const sendMail = (req, res, next) => {
  const { sendMailService } = res.locals;

  return sendMailService
    .send(req.body)
    .then((result) => {
      return res.json({
        message: "email enviado com sucesso",
      });
    })
    .catch(next);
};

module.exports = sendMail;
