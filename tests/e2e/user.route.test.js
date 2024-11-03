describe("User E2E Tests", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000");
  });

  it("should create and display a new user", async () => {
    // Create a new user via API
    const response = await page.evaluate(async () => {
      const res = await fetch("http://localhost:8800/api/user/post-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Jane Doe",
          email: "jane@example.com",
        }),
      });
      return await res.json();
    });

    // Verify the response
    expect(response).toHaveProperty("id");
    expect(response.name).toBe("Jane Doe");
    expect(response.email).toBe("jane@example.com");

    // Get all users and verify the new user is included
    const users = await page.evaluate(async () => {
      const res = await fetch("http://localhost:8800/api/user/get-users");
      return await res.json();
    });

    expect(users).toHaveLength(1);
    expect(users[0]).toMatchObject(response);
  });
});
