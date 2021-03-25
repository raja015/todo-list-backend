// var mongoose = require('mongoose');
// var UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });
// mongoose.model('User', UserSchema);

// module.exports = mongoose.model('User');


module.exports = mongoose => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        name: String,
        email: String,
        password: String

      },
      { timestamps: true }
    )
  );


  return User;
};
