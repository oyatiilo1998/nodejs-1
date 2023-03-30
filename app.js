var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var indexRouter = require("./routes/todos");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(bodyParser.json());
app.use("/", indexRouter);

module.exports = app;
