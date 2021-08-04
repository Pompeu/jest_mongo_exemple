const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../../src/app");
const conn = require("../../../src/config/mongo_conn");

describe("create user endpoint", () => {
  let id = "";
  beforeAll(() => conn());

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
          id = res.body._id;
          expect(res.body).toBeDefined();
          expect(res.body.name).toEqual(newUser.name);
          expect(res.body.email).toEqual(newUser.email);
          expect(res.body.createdAt).toBeDefined();
          expect(res.body.updatedAt).toBeDefined();
        });
    });
  });

  describe("when try create a user with same email", () => {
    it("should be return status 409", () => {
      const newUser = { name: "Manny", email: "manuy@email.com" };

      return request(app)
        .post("/api/users")
        .send(newUser)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(409)
        .then((res) => {
          expect(res.status).toEqual(409);
          expect(res.body.errors[0]).toEqual("this mail is in use!");
        });
    });
  });

  describe("when try get an user by id", () => {
    it("should be return 200, and data of user", () => {
      return request(app)
        .get(`/api/users/${id}`)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).toBeDefined();
          expect(res.body.createdAt).toBeDefined();
          expect(res.body.updatedAt).toBeDefined();
        });
    });
  });

  describe("when try get an list of users", () => {
    it("should be return 200, and list of users", () => {
      return request(app)
        .get(`/api/users/`)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).toBeDefined();
          expect(res.status).toEqual(200);
          expect(res.body.length).toBeGreaterThan(0);
          res.body.forEach((user) => {
            expect(user.createdAt).toBeDefined();
            expect(user.updatedAt).toBeDefined();
          });
        });
    });
  });

  describe("when try update an user", () => {
    it("should be return 202, and data of user", () => {
      const newUser = { name: "Manny", email: "jose@email.com" };

      return request(app)
        .put(`/api/users/${id}`)
        .send(newUser)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(202)
        .then((res) => {
          expect(res.body).toBeDefined();
          expect(res.body.name).toEqual(newUser.name);
          expect(res.body.email).toEqual(newUser.email);
          expect(res.body.createdAt).toBeDefined();
          expect(res.body.updatedAt).toBeDefined();
        });
    });
  });

  describe("when try delete an user by id", () => {
    it("should be return 204, and data of user", () => {
      return request(app)
        .delete(`/api/users/${id}`)
        .set("Accept", "application/json")
        .expect(204)
        .then((res) => expect(res.status).toEqual(204));
    });
  });
});
