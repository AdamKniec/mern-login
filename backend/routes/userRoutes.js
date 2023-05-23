import express from "express";
import {
  authenticateUser,
  getProfile,
  logoutUser,
  registerUser,
  updateProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/auth", authenticateUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getProfile).put(updateProfile);

export default router;
