const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true, default: '' },
  skill: { type: String, required: true, default: '' },
  location: { type: String, required: true, default: '' },
  image: { type: String, required: true, default: '' }
});

const plumeProfiles = mongoose.model("plumeProfiles", profileSchema);

module.exports = plumeProfiles;
