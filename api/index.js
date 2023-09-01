const express = require("express");
const userRoute = require("./userRoute");
const teamRoute = require("./teamRoute");

const router = express.Router();

router.use("/", userRoute);
router.use("/teams", teamRoute);

module.exports = router;
