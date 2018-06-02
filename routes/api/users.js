const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/skills")
  .get(userController.getSkillList);
  
// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Return users with searched skill
router
  .route("/skills/:skill")
  .get(userController.getSkill);

module.exports = router;
