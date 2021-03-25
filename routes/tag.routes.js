module.exports = app => {
  const todos = require("../controllers/tag.controller.js");
  const auth = require("../auth/AuthController.js");
  var router = require("express").Router();

  router.get("/",auth.find,todos.findAll);
  router.post("/",auth.find,todos.create);

  app.use('/api/tags',router);
};
