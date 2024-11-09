const { Router } = require("express");
const router = Router();
const authController = require("../controllers/auth.controller");
const ROUTES = require("../utils/routes.utils");

router.post(ROUTES.registerUser, authController.registerUser);

module.exports = router;
