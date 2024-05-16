import express from "express";
import userControllers from "../controllers/userControllers.js";
import { expressjwt } from "express-jwt";
import "dotenv/config";

const router = express.Router();

router.post("/api/users", userControllers.create);
router.get("/api/users/:id", userControllers.find);
router.get("/api/users", userControllers.list);
router.patch("/api/users/:id", userControllers.update);
router.delete("/api/users/:id", userControllers.destroy);
router.post("/api/users/login", userControllers.login);
router.post(
  "/api/users/profile",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  userControllers.profile
);
router.post(
  "/api/users/comprar",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  userControllers.comprar
);

export default router;
