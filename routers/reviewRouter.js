const express = require("express");
const mysql2 = require("mysql2");

const router = express.Router();

router.get("/write", (req,res,next) => {
    res.render("screens/reviewWrite");
});

module.exports = router;