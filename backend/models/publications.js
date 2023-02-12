const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }, //(clé étrangère collection Users)
    message: String,
    createdAt: Date,
});

const Publication = mongoose.model("publications", publicationSchema);

module.exports = Publication;
