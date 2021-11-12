const mysql2 = require("mysql2");
const express = require("express")
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

router.post("/delect", (req, res, next) => {
  
    try {
      const deleteQuery = `
        DELETE  FROM review_db
         WHERE  
      `;
  
      conn.query(deleteQuery, (error, result) => {
        if (error) {
          return res.status(400).send("삭제 중 에러 발생!");
        }
  
        res.redirect("/review/write");
      });
    } catch (error) {
      console.error(error);
      return res.status(400).send("삭제에 실패했습니다.");
    }
  });



module.exports = router;