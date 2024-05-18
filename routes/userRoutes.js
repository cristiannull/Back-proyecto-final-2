import express from "express";
import userControllers from "../controllers/userControllers.js";
import { expressjwt } from "express-jwt";
import "dotenv/config";

const router = express.Router();

router.post("/api/users", userControllers.create);
router.get(
  "/api/users/:id",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  userControllers.find
);
router.get(
  "/api/users",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  userControllers.list
);
router.patch(
  "/api/users/:id",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  userControllers.update
);
router.delete(
  "/api/users/:id",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  userControllers.destroy
);
router.post("/api/users/login", userControllers.login);
router.post(
  "/api/users/profile",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  userControllers.profile
);

export default router;
