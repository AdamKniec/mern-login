import express from "express";
import { authenticateUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/auth", authenticateUser);

export default router;
