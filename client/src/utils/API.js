import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomUser: function() {
    return axios.get("http://localhost:3001/api/users/random");
  },
  getUsersOfSkill: function(skill) {
    return axios.get("http://localhost:3001/api/users/" + skill + "/images");
  },
  getBaseSkillsList: function() {
    return axios.get("http://localhost:3001/api/skills/list");
  }
};
