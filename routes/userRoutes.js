import express from "express";
import userControllers from "../controllers/userControllers.js";
import { expressjwt } from "express-jwt";
import "dotenv/config";
import userValidations from "../middlewares/validateUser.js";
import errorsIsEmpty from "../middlewares/errorsIsEmpty.js";
const router = express.Router();

router.post("/api/auth/register", userControllers.create);
router.get(
  "/api/users/:id",
 /*  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }), */
  userControllers.find
);
router.get(
  "/api/users",
  /* expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }), */
  userControllers.list
);
router.patch(
  "/api/users/:id",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  userControllers.update
);
router.delete(
  "/api/users/:id",
 /*  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }), */
  userControllers.destroy
);
router.post(
  "/api/users/profile",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  userControllers.profile
);

export default router;
