import shoopControllers from "../controllers/shoopControllers.js";
import express from "express";
import { expressjwt } from "express-jwt";
import shoopValidations from "../middlewares/validateShoop.js";
import errorsIsEmpty from "../middlewares/errorsIsEmpty.js";
import "dotenv/config";

const router = express.Router();

router.post(
  "/api/shoop",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  shoopControllers.create
);

router.get(
  "/api/shoop/:id",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  shoopControllers.find
);

router.get(
  "/api/shoops",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  shoopControllers.list
);

router.patch(
  "/api/shoop/:id",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  shoopControllers.update
);

router.delete(
  "/api/shoop/:id",
  expressjwt({ algorithms: ["HS256"], secret: process.env.JWT_SECRET }),
  shoopControllers.destroy
);

export default router;
