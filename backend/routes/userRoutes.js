import express from "express";
import {
  authenticateUser,
  getProfile,
  logoutUser,
  registerUser,
  updateProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/auth", authenticateUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect, getProfile).put(protect, updateProfile);

export default router;
