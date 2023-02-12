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
        createdAt: new Date(),
    });
    newTweet.save()
    .then(publication => {
        Publications.findOne({ _id: publication._id })
        .populate('userId')
        .then((data) => {
            console.log(data)
            res.json({ result: true, publication: data });
        });
    })
});

router.get("/", (req, res) => {
    Publications.find()
    .sort({createdAt: 'desc'})
    .populate('userId')
    .then((data) => {
        res.json({ publicationList: data });
    });
});


router.delete('/', (req, res) => {
    if (!checkBody(req.body, ["publicationId"])) {
        res.json({
            result: false,
            error: "require publicationId",
        });
        return;
    }

    Publications.deleteOne({ _id: req.body.publicationId })
    .then((publication) => {

        if(publication.deletedCount === 0){
            res.json({
                result: false,
                error: "Publication not found",
            });
        }
        return res.json({ result: true });
    })
})

module.exports = router;
