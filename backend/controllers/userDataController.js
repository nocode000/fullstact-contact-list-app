const asyncHandler = require("express-async-handler");
const user = require("../models/user");

const getUserData = asyncHandler(async (req, res) => {
  const userData = await user.find();
  res.json(userData);
});
const postUserData = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("enter a valid data");
  }
  const userData = await user.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    contacts: req.body.contacts,
  });
  res.json(userData);
});
const updateUserData = asyncHandler(async (req, res) => {
  const userData = await user.findById(req.params.id);
  if (!userData) {
    res.status(400);
    throw new Error("user data not found.");
  }
  const updatedUserData = await user.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(updatedUserData);
});
const deleteUserData = asyncHandler(async (req, res) => {
  const userData = await user.findById(req.params.id);
  if (!userData) {
    res.status(400);
    throw new Error("user data not found.");
  }
  await userData.remove();
  res.json({ id: req.params.id });
});

module.exports = { getUserData, postUserData, updateUserData, deleteUserData };
