const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../../src/app");

describe("Create user endpoint", () => {
  beforeAll(() => {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  describe("when try create an user", () => {
    it("should be return 201, and data of user", () => {
      const newUser = { name: "Manny", email: "manuy@email.com" };

      return request(app)
        .post("/api/users")
        .send(newUser)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(201)
        .then((res) => {
          expect(res.body).toBeDefined();
          expect(res.body.name).toEqual(newUser.name);
          expect(res.body.email).toEqual(newUser.email);
        });
    });
  });
});
