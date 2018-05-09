const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/userlist",
  {
    // useMongoClient: true
  }
)

const userSeed = [
  {
    username: "Taqwa",
    password: "12345",
    email: "taqwa@plume.com",
    signupDate: new Date(Date.now()),
    skill: "beekeeping",
    isDeleted: { type: Boolean, default: false }
  },
  {
    username: "Li_C",
    password: "12345",
    email: "li@plume.com",
    signupDate: new Date(Date.now()),
    skill: "beekeeping",
    isDeleted: { type: Boolean, default: false }
  },
  {
    username: "Maria",
    password: "12345",
    email: "maria@plume.com",
    signupDate: new Date(Date.now()),
    skill: "beekeeping",
    isDeleted: { type: Boolean, default: false }
  },
  {
    username: "Dan",
    password: "12345",
    email: "dan@plume.com",
    signupDate: new Date(Date.now()),
    skill: "beekeeping",
    isDeleted: { type: Boolean, default: false }
  },
  {
    username: "Amber",
    password: "12345",
    email: "amber@plume.com",
    signupDate: new Date(Date.now()),
    skill: "beekeeping",
    isDeleted: { type: Boolean, default: false }
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data);
    // console.log(data.insertIds.length + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
