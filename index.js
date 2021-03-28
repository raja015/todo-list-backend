
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://todo-list-015.herokuapp.com",

};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.options("*",(req,res)=>{
console.log("option");
res.header("Access-Control-Allow-Origin", "https://todo-list-015.herokuapp.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Todo Backend." }),
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
