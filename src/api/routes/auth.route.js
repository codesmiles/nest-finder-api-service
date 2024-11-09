const { Router } = require("express");
const ROUTES = require("../utils/routes.utils");
const { registerUser } = require("../controllers/index");

const router = Router();


router.post(ROUTES.registerUser, registerUser);

module.exports = router;
