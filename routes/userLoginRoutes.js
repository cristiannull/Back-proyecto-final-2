import "dotenv/config";
import express from "express";
import authController from "../controllers/authControllers.js";

import { expressjwt as checkJwt } from "express-jwt";

const router = express.Router();
router.post("/api/auth/login", authController.login);
router.get(
  "/api/videogamelist",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  async (req, res) => {
    return res.json("Ruta privada");
  }
);
router.post("/api/auth/validate", authController.tokenIsValid);
export default router;
