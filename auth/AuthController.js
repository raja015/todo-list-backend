var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
// var User = require('../user/User.js');
var db =require('../connection/db');
var User = db.user;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/db.config');



exports.create= (req, res)=> {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.find({name:req.body.name})
    .then(data=>{


      if(data.length==0){
        const user = new User({
          name : req.body.name,
           email : req.body.email,
           password : hashedPassword
        });

      user
        .save(user)
        .then(dataq => {
          var token = jwt.sign({ id: dataq._id }, config.secret, {
                 expiresIn: 86400 // expires in 24 hours
           });
           res.status(200).send({ auth: true, token: token });

        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "There was a problem registering the user."
          });
        });
      }
      else{

          res.status(400).send({
            message:
              "user already exist"
          });

      }
    }

    )

};




  exports.find= (req, res,next) =>{

    // console.log(req.headers);
    // console.log(req.headers.authorization);
    var token = req.headers.authorization;
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      // console.log(decoded);

      req.body.tokenInfo=decoded;
      next();
    });
  };



  exports.login = (req,res) =>{
    var Name = req.body.name;
    console.log(req.body);
    //  console.log(User.find({ name: Name, password: hashedPassword }));
     User.find({ name: Name })
    .then(data => {

      console.log(data);

      const verified = bcrypt.compareSync(req.body.password, data[0].password);
      console.log(verified);
      // data.find({password:})
      if(verified){
        var token = jwt.sign({ id: data[0]._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token});
      }
      // else{

      //     res.status(401).send({
      //       message:
      //          "password is not same"
      //     });

      // }

    })
    .catch(err => {
      res.status(401).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });


  };

