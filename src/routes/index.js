const express = require("express");
const router = express.Router();
const auth = require("./auth");


router.get("/", async (req, res) => {
  res.send("your api is home");
  console.log("get");
});

router.use("/auth", auth);

module.exports = router;
