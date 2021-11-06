const express = require("express");
const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const dbConfig = {
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    dbName: process.env.DB_NAME,
};

const conn = mysql2.createConnection({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.dbName,
});

const router = express.Router();

router.get("/write", (req,res,next) => {
    const Selectquery = `

        SELECT	id,
                nickname,
                content,
                grade,
                kinds
          FROM	review_db
         ORDER  BY id
    `;

    try {
        conn.query(Selectquery, (error ,Selectreview_db) => {
            console.log(error);
            res.render("screens/review",{ Selectreview_db })
        });
    } catch (error) {
        console.log(error)
    }
});

router.get("/", (req,res,next) => {
    res.render("screens/reviewWrite");
});


router.post("/wrote", (req,res) => {
    const InsertQuery = `
        INSERT INTO review_db (
            nickname,
            content,
            grade,
            kinds
        ) VALUES (
            "${req.body.nickname}",
            "${req.body.content}",
            ${req.body.grade},
            "${req.body.kinds}"
        )
    `;

    try {
        conn.query(InsertQuery, (err) => {
            if (err) {
                console.log(err);
            }
            res.redirect("/review/write");
        });
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;