
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://todo-list-015.herokuapp.com",

};

app.use(cors(corsOptions));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://todo-list-015.herokuapp.com");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// var AuthController = require('./auth/AuthController.js');
// app.use('/api/auth', AuthController);
// module.exports = app;
app.options("*",(req,res)=>{
console.log("option");
res.header("Access-Control-Allow-Origin", "https://todo-list-015.herokuapp.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." }),
  console.log("/");
});
require("./routes/auth.routes")(app)
require("./routes/todo.routes")(app);
require("./routes/tag.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8000;
//routing

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./connection/db");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");

  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  // const Todo = db.todos;

  // app.get("/test", (req, res) => {
  //   const todo = new Todo({
  //     title: "file",
  //     description: "req.body.description",
  //     published:  true
  //   });

  //   // Save Tutorial in the database
  //   todo
  //     .save(todo)
  //     .then(data => {
  //       res.send(data);
  //     })
  //     .catch(err => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while creating the Tutorial."
  //       });
  //     });
  // });
  // app.get("/create", (req, res) => {
  //   res.send({message:"kuch bhi"});
  // });

  // app.post("/test", (req, res) => {
  //   // Validate request
  //   if (!req.body.title) {
  //     res.status(400).send({ message: "Content can not be empty!" });
  //     return;
  //   }

  //   // Create a Tutorial

  //   const todo = new Todo({
  //     title: req.body.title,
  //     description: req.body.description,
  //     published: req.body.published ? req.body.published : false
  //   });


  //   // Save Tutorial in the database
  //   todo
  //     .save(todo)
  //     .then(data => {
  //       res.send(data);
  //     })
  //     .catch(err => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while creating the Tutorial."
  //       });
  //     });
  // });


  // app.post("/create", (req, res) => {
  //   // Validate request
  //   if (!req.body.title) {
  //     res.status(400).send({ message: "Content can not be empty!" });
  //     return;
  //   }


  //   const todo = new Todo({
  //     title: req.body.title,
  //     description: req.body.description,
  //     published: req.body.published ? req.body.published : false
  //   });


  //   // Save Tutorial in the database
  //   todo
  //     .save(todo)
  //     .then(data => {
  //       res.send(data);
  //     })
  //     .catch(err => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while creating the Tutorial."
  //       });
  //     });
  // });

