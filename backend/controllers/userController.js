import User from "../models/userModel.js";
import generateJWT from "../utils/generateJWT.js";

const authenticateUser = async (req, res) => {
  const { password, email } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser && (await existingUser.checkPasswordMatch(password))) {
    generateJWT(res, existingUser._id);
    res.status(201).json({
      _id: existingUser._id,
      password: existingUser.password,
      name: existingUser.name,
    });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
    throw new Error("Invalid username or password");
  }
};
const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ response: "User logged out" });
};

const getProfile = (req, res) => {
  const userData = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(userData);
};

const updateProfile = async (req, res) => {
  console.log("dane usera:", req.body);
  const user = await User.findOne({ _id: req.user._id });
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
  } else {
    res.status(404).json({ response: "User not found" });
  }
  await user.save();
  res.status(201).json({ response: "User's profile update" });
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
    generateJWT(res, user._id);
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
