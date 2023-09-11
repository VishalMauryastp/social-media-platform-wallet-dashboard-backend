const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

// router.post("/signup", authController.signup);
router.post("/signup",authController.signup )
router.post("/Login",authController.Login )

module.exports = router;
