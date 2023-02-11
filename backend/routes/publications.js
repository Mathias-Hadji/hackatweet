// GET : /
// GET ONE : /:id
// POST : /
// DELETE : /:id
require("../models/connections");
var express = require("express");
const { checkBody } = require("../modules/checkBody");
var router = express.Router();
const Publications = require("../models/publications");

router.post("/", (req, res) => {
  if (!checkBody(req.body, ["message"])) {
    res.json({
      result: false,
      error: "please enter your message",
    });
    return;
  }
  const newTweet = new Publications({
    userId: req.body.userId,
    message: req.body.message,
    // createdAt: Date,
  });
  newTweet.save().then(() => {
    res.json({ result: true });
  });
});

router.get("/", (req, res) => {
  Publications.find().then((data) => {
    res.json({ publicationList: data });
  });
});

module.exports = router;
