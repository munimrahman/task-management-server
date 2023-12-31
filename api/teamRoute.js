const express = require("express");
const teamController = require("../controllers/teamController");
const router = express.Router();

router
  .route("/")
  .get(teamController.getAllTeams)
  .post(teamController.createTeam);

router
  .route("/:id")
  .get(teamController.getTeamById)
  .put(teamController.addTeamMember);

module.exports = router;
