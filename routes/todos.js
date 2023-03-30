const { json } = require("express");
var express = require("express");
var router = express.Router();

let todos = [];

router.get("todos/:id", function (req, res, next) {
  for (let todo in todos) {
    if (todo.id == req.params.id) {
      res.send(todo);
    }
  }
  res.send({});
});

router.get("/todos", function (req, res, next) {
  console.log(todos);
  res.send(todos);
});

router.post("/todos", function (req, res, next) {
  todos.push(req.body);
  res.send("successfully added");
});

router.delete("/todos/:id", function (req, res, next) {
  todos.filter((todo) => {
    console.log(todo);
    console.log(todo.id == req.params.id);
    todo.id == req.params.id;
  });
  res.send("successfully deleted");
});

module.exports = router;
