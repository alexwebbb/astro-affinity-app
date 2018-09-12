const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  name: String,
  birthdate: Date,
  description: String,
  image: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("profiles", profileSchema);
