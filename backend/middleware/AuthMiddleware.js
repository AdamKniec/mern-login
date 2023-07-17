import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
const protect = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    try {
      const userFound = await User.findById(decoded.userID).select("-password");
      req.user = userFound;
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Incorrect token");
    }
  } else {
    res.status(401).json({ message: "Token not found" });
    throw new Error("Token not found");
  }
};

export { protect };

// TODO ANKI JAK dodawać route protecty do Routów
