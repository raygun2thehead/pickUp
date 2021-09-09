const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 64,
  },
  createDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  created: [],
  going: []
 
});


module.exports = mongoose.model("User", user);