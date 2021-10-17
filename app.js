const express = require("express");
const morgan = require("morgan");
const path = require("path");
const globalRouter = require("./routers/globalRouter");

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log("4000 SERVER START");
});