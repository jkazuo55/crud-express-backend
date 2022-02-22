const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    // userId: { type: String},
  },
  { collection: 'users' }
);

module.exports = mongoose.model('UserSchema', userSchema);
