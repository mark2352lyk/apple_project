const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("screens/main");
});

router.get("/iphone", (req,res,next) => {
    res.render("screens/iphone");
});

router.get("/ipad", (req,res,next) => {
    res.render("screens/ipad");
});

router.get("/mac", (req,res,next) => {
    res.render("screens/mac");
});

router.get("/watch", (req,res,next) => {
    res.render("screens/watch");
});

router.get("/review", (req,res,next) => {
    res.render("screens/review");
});

router.get("/login", (req,res,next) => {
    res.render("screens/login");
});

module.exports = router;