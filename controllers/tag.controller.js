const db = require("../connection/db");
const Tag=db.tag;
// var jwt = require('jsonwebtoken');

// var config = require('../config/db.config');

//  Tags api

exports.findAll = (req, res) => {

  const title = req.body.tokenInfo.id;
  var condition = {User:title}
  console.log(condition)
  Tag.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};



exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // console.log(req)
  console.log(req.body.tokenInfo);
  // Create a Tag
  const tag = new Tag({
    title:req.body.title,
    User:req.body.tokenInfo.id
  });
  // Save Tutorial in the database
  tag
    .save(tag)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


// function verify(token) {
//     console.log(token);
//     if (!token) return "401";

//     jwt.verify(token, config.secret, function(err, decoded) {
//       if (err) return "500";
//       console.log("decode",decoded.id)
//       return (decoded.id);
// })};
