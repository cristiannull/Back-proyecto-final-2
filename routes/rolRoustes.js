import rolControllers from "../controllers/rolControllers.js";
import express from "express";
import { expressjwt } from "express-jwt";
import "dotenv/config";
import roleValidations from "../middlewares/validateRole.js";
import errorsIsEmpty from "../middlewares/errorsIsEmpty.js";

const router = express.Router();

router.post(
  "/api/rol",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  roleValidations,
  errorsIsEmpty,
  rolControllers.create
);
router.get(
  "/api/rol/:id",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  rolControllers.find
);
router.patch(
  "/api/rol/:id",
  /* expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }), */
  rolControllers.update
);
router.get(
  "/api/rol",
  /* expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }), */
  rolControllers.list
);
router.delete(
  "api/rol/:id",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  rolControllers.destroy
);
export default router;
