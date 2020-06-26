var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var crustsRouter = require("./routes/crusts");
var sizesRouter = require("./routes/sizes");
var toppingsRouter = require("./routes/toppings");
var toppingsRouter = require("./routes/toppings");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/crusts", crustsRouter);
app.use("/sizes", sizesRouter);
app.use("/toppings", toppingsRouter);

module.exports = app;
