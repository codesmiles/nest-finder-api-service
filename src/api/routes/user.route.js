const { Router } = require("express");
const router = Router();

const users = [];

router.get("/get-users", (req, res) => {
  res.json(users);
});

router.post("/post-user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;