const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.todos = require("../models/todo.model.js")(mongoose);
db.tag= require("../models/tag.model.js")(mongoose);
db.user=require("../user/User.js")(mongoose);
module.exports = db;
