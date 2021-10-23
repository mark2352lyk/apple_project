const express = require("express");
const dotenv = require("dotenv");
const mysql2 = require("mysql2");
dotenv.config();

const dbConfig = {
  host: process.env.host,
  port: process.env.port,
  user: process.env.user,
  password: process.env.password,
  dbName: process.env.dbName,
};

const conn = mysql2.createConnection({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.dbName,
});

const router = express.Router();

router.get("/create", (req, res, next) => {
  res.render("screens/create");
});

router.post("/create", async (req, res, next) => {
  const { title, content } = req.body;

  const createQuery = `
    INSERT INTO boards (
        title,
        content,
        createAt,
        UserId
    ) VALUES (  
        "${title}",
        "${content}",
        now(),
        1
    )
  `;

  try {
    conn.query(createQuery, (error, result) => {
      if (error) {
        return res.status(400).send("잘못된 요청 입니다. 다시 시도해주세요.");
      }

      res.redirect(`/login/${result.insertId}`);
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send("게시글 생성에 실패했습니다.");
  }
});

module.exports = router;