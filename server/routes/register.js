const express = require("express");
const router = express.Router();
// const checkAuth = require("../middleware/auth");
const authController = require("../controllers/register");
router.post("/SignUp", authController.signup);
router.post("/Login", authController.login);
router.post("/forgetPassword", authController.forgetPassword);
router.post("/updatePassword/:id", authController.updatePassword);

module.exports = router;
