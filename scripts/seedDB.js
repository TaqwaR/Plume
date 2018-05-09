const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/userDB"
  // {
  //   // useMongoClient: true
  // }
)

const userSeed = [
  {
    name: "Taqwa",
    skill: "beekeeping",
    location: "Berlin, Germany"
  },
  {
    name: "Li_C",
    skill: "DJing",
    location: "Rockville, MD"
  },
  {
    name: "Maria",
    skill: "Public Speaking",
    location: "Washington, DC"
  },
  {
    name: "Dan",
    skill: "herbologist",
    location: "Arlington, VA"
  },
  {
    name: "Amber",
    skill: "graphic design",
    location: "Centerville, VA"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data);
    console.log(data.result.n + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
