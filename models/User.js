const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  googleBday: Date,
  credits: { type: Number, default: 3 },
  primary: { type: Schema.Types.ObjectId, ref: "Profile", default: null }
});

mongoose.model('users', userSchema);
