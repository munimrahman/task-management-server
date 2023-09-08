const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.route("/users").get(userController.getAllUsers);

router.route("/user-by-email").get(userController.getUserByEmail);

router.route("/register").post(userController.createUser);

router.route("/log-in").post(userController.logIn);

router
  .route("/users/:id")
  .get(userController.getUserById)
  .put(userController.updateUserById);

module.exports = router;
