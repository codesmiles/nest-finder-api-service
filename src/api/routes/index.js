const { Router } = require("express");
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");
const ROUTES = require("../../configs/routes.config");
const router = Router();

router.use(`${ROUTES.user}`, userRoutes);
router.use(`${ROUTES.auth}`, authRoutes);

module.exports = router;
