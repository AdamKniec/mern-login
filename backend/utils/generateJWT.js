import jwt from "jsonwebtoken";
const generateJWT = (res, userID) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("jwt", token, {
    secure: process.env.NODE_ENV !== "DEVELOPMENT",
    sameSite: "strict",
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
};

export default generateJWT;
