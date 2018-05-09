const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, default: '' },
  skill: { type: String, required: true, default: '' },
  location: { type: String, required: true, default: '' }
});


module.exports = userSchema;
