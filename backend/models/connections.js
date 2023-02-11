const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectionString = process.env.CONNECTION_STRING;

//   "mongodb+srv://HassanCapsule:T6d8UdUhfUKqZJu1@cluster0.mwh915q.mongodb.net/";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
