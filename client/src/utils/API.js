import axios from "axios";

// Export an object containing methods we'll use for accessing the User DB

export default {
  getRandomUser: function() {
    return axios.get("api/users/profile");
  },
  getSkill: function(skill) {
    return axios.get("/api/users/skills/" + skill);
  },
  getSkillList: function() {
    return axios.get("/api/users/skills");
  }
};
