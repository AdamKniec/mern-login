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

const registerUser = (req, res) => {
  res.status(200).json({ response: "User registered!" });
};
export {
  authenticateUser,
  logoutUser,
  getProfile,
  updateProfile,
  registerUser,
};
