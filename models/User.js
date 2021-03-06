const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  googleBday: Date,
  credits: { type: Number, default: 5 },
  primary: { type: Schema.Types.ObjectId, ref: "Profile", default: null },
  newUserFlag: { type: Boolean, default: true }
});

mongoose.model('users', userSchema);
