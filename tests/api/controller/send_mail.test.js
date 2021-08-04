const sendEmail = require("../../../src/controller/send_email_controller");

describe("send mail controller", () => {
  const sendMailService = {
    send: jest.fn(() => Promise.resolve({ data: {} })),
  };

  const next = jest.fn();
  const body = {
    email: "ia@net.com",
    subject: "Ola isso  é um teste",
    text: "any text",
  };

  const req = {
    body,
  };

  const res = {
    locals: { sendMailService },
    json: jest.fn(),
  };

  describe("when calling", () => {
    it("should be res.json called", () => {
      return sendEmail(req, res, next).then(() => {
        expect(res.json).toHaveBeenCalled();
        expect(next).not.toHaveBeenCalled();
      });
    });
  });
});
