import User from "../models/userModel.js";

const authenticateUser = (req, res) => {
  res.status(200).json({ response: "Response from the backend server" });
};
const logoutUser = (req, res) => {
  res.status(200).json({ response: "User log out" });
};

const getProfile = (req, res) => {
  res.status(200).json({ response: "User's profile" });
};

const updateProfile = (req, res) => {
  res.status(200).json({ response: "User's profile update" });
};

const registerUser = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User exists in the DB!" });
    }
  } catch (err) {
    res.status(500);
    throw new Error("There was a problem with authenticating");
  }

  const user = new User({
    email: email,
    password: password,
    name: name,
  });

  if (user) {
    await User.create(user);
    res.status(201).json(user);
  }
};
export {
  authenticateUser,
  logoutUser,
  getProfile,
  updateProfile,
  registerUser,
};
