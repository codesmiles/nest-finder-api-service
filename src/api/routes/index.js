const { Router } = require("express");
const ROUTES = require("../utils/routes.utils");
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");
// const cacheManager = require("../services/cache.service");

const router = Router();

router.use(ROUTES.user, userRoutes);

router.use(ROUTES.auth, authRoutes);

module.exports = router;

// const users = [];

// router.get("/get-users", (req, res) => {
//   res.json(users);
// });
// router.post("/post-user", (req, res) => {
//   const { name, email } = req.body;

//   if (!name || !email) {
//     return res.status(400).json({ error: "Name and email are required" });
//   }

//   const newUser = { id: users.length + 1, name, email };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// // Example route file (./routes/users.js)
// /**
//  * @swagger
//  * /api/user:
//  *   get:
//  *     summary: Returns a list of users
//  *     description: Retrieve a list of all users from the system
//  *     responses:
//  *       200:
//  *         description: A list of users
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 type: object
//  *                 properties:
//  *                   id:
//  *                     type: integer
//  *                     description: User ID
//  *                   name:
//  *                     type: string
//  *                     description: User name
//  *   post:
//  *     summary: Create a new user
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *                 description: User name
//  *     responses:
//  *       201:
//  *         description: User created successfully
//  */
// router.get("/api/users", (req, res) => {
//   res.json([{ id: 1, name: "John Doe" }]);
// });

// router.post("/api/users", (req, res) => {
//   // Route implementation
// });

// // Test route
// router.get("/test-redis", async (req, res) => {
//   try {
//     await cacheManager.set("test-key", { message: "Redis is working!" });
//     const result = await cacheManager.get("test-key");
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
