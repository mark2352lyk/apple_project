const express = require("express");
const mysql2 = require("mysql2");

const router = express.Router();

router.get("/review", (req,res,next) => {
    res.render("screens/review");
});

module.exports = router;