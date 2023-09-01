const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

router
  .route("/")
  .get(taskController.getAllTasks)
  .post(taskController.createTask);

// router.route("/:id").put(taskController.addTeamMember);

module.exports = router;
