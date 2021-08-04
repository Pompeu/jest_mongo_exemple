const { sendMailInject } = require("../../src/middlewares");

describe("send email service inject", () => {
  const req = {};
  const res = {
    locals: {
      sendMailService: {},
    },
  };
  const next = jest.fn();

  describe("when inject service", () => {
    it("should be next called", () => {
      sendMailInject(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
});
