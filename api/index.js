const express = require("express");
// const userRoute = require("./userRoute");
// const postRoute = require("./postRoute");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server Working Fine!");
});

// router.use("/", userRoute);
// router.use("/", postRoute);

module.exports = router;
