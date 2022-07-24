const express = require("express");
const router = express.Router();
const {
  getUserData,
  postUserData,
  updateUserData,
  deleteUserData,
} = require("../controllers/userDataController");

router.get("/", getUserData);
router.post("/", postUserData);
router.put("/:id", updateUserData);
router.delete("/:id", deleteUserData);

module.exports = router;
