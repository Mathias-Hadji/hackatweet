const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  userName: String,
  password: String,
  token: String,
  // profilePic: String,
  // createdAt: Date,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
