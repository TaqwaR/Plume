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
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Li_C",
    skill: "DJing",
    location: "Rockville, MD",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Maria",
    skill: "Public Speaking",
    location: "Washington, DC",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Dan",
    skill: "herbologist",
    location: "Arlington, VA",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"

  },
  {
    name: "Amber",
    skill: "graphic design",
    location: "Centerville, VA",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Taqwa",
    skill: "beekeeping",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "JC",
    skill: "programing",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Nathan",
    skill: "Instructing",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "God",
    skill: "Goding",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Trump",
    skill: "BS-ing",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Chad",
    skill: "Fitness",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Betty",
    skill: "Interior Design",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Jesus",
    skill: "Lording",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Naruto",
    skill: "Ninjistu",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Michael Avenatti",
    skill: "Lawyer",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Karl Marx",
    skill: "Communism",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "John Rawls",
    skill: "Capitalism",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Patrick",
    skill: "APIs",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Elon Musk",
    skill: "Entrepreneurship",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Noam Chomsky",
    skill: "Linguistics",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Janet Mock",
    skill: "Queer Theory",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "Naomi Wolfe",
    skill: "Third Wave Feminism",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
  },
  {
    name: "The Rock",
    skill: "Wrestling",
    location: "Berlin, Germany",
    image: "https://media.giphy.com/media/26vUzxFHrLdt225UI/giphy.gif"
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
