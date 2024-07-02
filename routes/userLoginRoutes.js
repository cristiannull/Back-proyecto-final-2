import "dotenv/config";
import express from "express";
import authController from "../controllers/authControllers.js";
import { expressjwt as checkJwt } from "express-jwt";
import adminControllers from "../controllers/adminControllers.js";

const router = express.Router();

router.post("/api/auth/login", authController.login);
router.post("/api/admin/login", adminControllers.login);
router.post("/api/auth/validate", authController.tokenIsValid);
export default router;
