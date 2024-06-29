import "dotenv/config";
import express from "express";
import authController from "../controllers/authControllers.js";
import { expressjwt as checkJwt } from "express-jwt";
import adminControllers from "../controllers/adminControllers.js";

const router = express.Router();

function requireRole(role) {
  return (req, res, next) => {
    if (!req.user || !req.user.roles || !req.user.roles.includes(role)) {
      return res.status(403).json({ message: "Acceso denegado" });
    }
    next();
  };
}
router.post("/api/auth/login", authController.login);
router.post("/api/admin/login", adminControllers.login);
router.post("/api/auth/validate", authController.tokenIsValid);
export default router;
