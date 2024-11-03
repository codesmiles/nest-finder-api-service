// tests/unit/userRoutes.test.js
const request = require("supertest");
const app = require("../../src/app");

describe("User Routes", () => {
  beforeEach(() => {
    // Clear users array before each test
    require("../../src/routes/userRoutes").users = [];
  });

  describe("GET /api/user/get-users", () => {
    it("should return empty array when no users exist", async () => {
      const response = await request(app).get("/api/users").expect(200);

      expect(response.body).toEqual([]);
    });
  });

  describe("POST /api/user/post-user", () => {
    it("should create a new user with valid data", async () => {
      const userData = { name: "John Doe", email: "john@example.com" };

      const response = await request(app)
        .post("/api/users")
        .send(userData)
        .expect(201);

      expect(response.body).toMatchObject({
        id: 1,
        ...userData,
      });
    });

    it("should return 400 when required fields are missing", async () => {
      const response = await request(app)
        .post("/api/users")
        .send({})
        .expect(400);

      expect(response.body).toHaveProperty("error");
    });
  });
});
