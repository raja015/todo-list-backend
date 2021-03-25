module.exports = app => {
    const auth = require("../auth/AuthController.js");

    var router = require("express").Router();


    router.post("/register",auth.create);
    router.get("/me",auth.find);
    router.post("/login",auth.login);
    app.use('/api/auth',router);
  };
