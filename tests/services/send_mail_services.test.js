const { sendMail } = require("../../src/services");

describe("Send mail service", () => {
  // todo fix sendGrid mock
  const sgMailInject = {
    send: jest.fn(() => Promise.resolve({ data: {} })),
  };
  const body = {
    email: "ia@net.com",
    subject: "Ola isso  é um teste",
    text: "any text",
    mail_settings: {
      sandbox_mode: {
        enable: true,
      },
    },
  };

  describe("When try send mail", () => {
    it("should be method send is called", () => {
      return sendMail(body, sgMailInject).then(() => {
        expect(sgMailInject.send).toHaveBeenCalled();
      });
    });
  });

  describe("When not inject sendEmail", () => {
    it("should be error", () => {
      sendMail(body);
      expect(sgMailInject.send).toHaveBeenCalled();
    });
  });
});
