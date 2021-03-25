module.exports = app => {
  const todos = require("../controllers/todo.controller.js");
  var router = require("express").Router();
  const auth = require("../auth/AuthController.js");


  // Create a new Tutorial
  router.post("/",auth.find, todos.create);

  // Retrieve user all Tutorials
  router.get("/",auth.find, todos.findAll);





  // // Retrieve a single Tutorial with id
  // router.get("/:id", todos.findOne);

  // Update a Tutorial with id
  router.put("/:id",auth.find, todos.update);

  // Delete a Tutorial with id
  router.delete("/:id",auth.find, todos.delete);

  // Create a new Tutorial
  router.delete("/", todos.deleteAll);

  app.use('/api/todos', router);

};
