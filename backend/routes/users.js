var express = require("express");
var router = express.Router();
const uid2 = require("uid2");
const bcrypt = require("bcrypt");
const { checkBody } = require("../modules/checkBody");
const User = require("../models/users");

/* Sign up */
router.post("/signup", (req, res) => {
    if (!checkBody(req.body, ["firstName", "userName", "password"])) {
        res.json({ result: false, error: "Empty field" });
        return;
    }
    User.findOne({ userName: req.body.userName }).then((data) => {
        if (data === null) {
            const hash = bcrypt.hashSync(req.body.password, 10);
            const token = uid2(32);
            const newUser = new User({
                firstName: req.body.firstName,
                userName: req.body.userName,
                password: hash,
                token: token,
            });
            newUser.save().then((data) => {
                res.json({
                    result: true,
                    userId: data._id,
                    firstName: newUser.firstName,
                    userName: newUser.userName,
                    token: token,
                });
            });
        } else {
            res.json({ result: false, error: "User is already registered" });
        }
    });
});

// Sign in
router.post("/signin", (req, res) => {
    if (!checkBody(req.body, ["userName", "password"])) {
        res.json({
            result: false,
            error: "Missing field, please fill the form !",
        });
        return;
    }
    User.findOne({ userName: req.body.userName }).then((data) => {
        if (data && bcrypt.compareSync(req.body.password, data.password)) {
            res.json({
                result: true,
                userId: data._id,
                firstName: data.firstName,
                userName: data.userName,
                token: data.token,
            });
        } else {
            res.json({
                result: false,
                error: "User is not found, please retry",
            });
        }
    });
});

router.get("/:token", (req, res) => {
    console.log("test");
    User.findOne({ token: req.params.token }).then((user) => {
        if (user) {
            res.json({ firstName: user.firstName, userName: user.userName });
        } else {
            res.json({ result: false, error: "No user found" });
        }
    });
});

module.exports = router;
