const express = require("express");
const mysql2 = require("mysql2");

const router = express.Router();

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

module.exports = router;

