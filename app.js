const express = require("express");
const morgan = require("morgan");

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));

app.listen(PORT, () => {
    console.log("4000 SERVER START");
});