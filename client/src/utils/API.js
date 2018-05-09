import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomUser: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
    // return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getUsersOfSkill: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
    // return axios.get("https://dog.ceo/api/breed/" + skill + "/images");

  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
    // return axios.get("https://dog.ceo/api/breeds/list");

  }
};
