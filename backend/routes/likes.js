// GET : /:publicationId/:userId
// POST : /
// DELETE : /:id
require("../models/connections");
var express = require("express");
var router = express.Router();
const { checkBody } = require("../modules/checkBody");
const Likes = require("../models/likes");

/* GET home page. */
// router.get("/", function (req, res) {
//   res.render("index", { title: "Express" });
// });

router.post("/", (req, res) => {
  const newLike = new Likes({
    userId: req.body.userId,
    publicationId: req.body.publicationId,
    token: req.body.token,
  });
  newLike.save().then((data) => res.json({ result: true, likes: data.likes }));
});

module.exports = router;
