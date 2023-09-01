const express = require("express");
const userRoute = require("./userRoute");
const teamRoute = require("./teamRoute");
const projectRoute = require("./projectRoute");

const router = express.Router();

router.use("/", userRoute);
router.use("/teams", teamRoute);
router.use("/projects", projectRoute);

module.exports = router;
