const fs = require("fs");
const { from } = require("rxjs");
const { filter, map } = require("rxjs/operators");
const sgMail = require("@sendgrid/mail");

require("dotenv").config();

sgMail.setApiKey(process.env.SEND_GRID_KEY);

const mailBuild = ({ email, subject, text, mail_settings = {} }) => {
  const body = {
    to: email,
    from: "noreplay@nodejsbrasil.com.br",
    subject,
    text,
    mail_settings,
  };

  return body;
};

const sendMail = (body, sgMailInject = sgMail) =>
  sgMailInject.send(mailBuild(body));

module.exports = sendMail;
