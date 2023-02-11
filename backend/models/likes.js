const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }, //clé étrangère collection Users)
  publicationId: { type: mongoose.Schema.Types.ObjectId, ref: "publications" }, //(clé étrangère collection Publications)
  token: String,
});

const Like = mongoose.model("likes", likeSchema);

module.exports = Like;
