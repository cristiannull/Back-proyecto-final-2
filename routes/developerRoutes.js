import developerControllers from "../controllers/developerControllers.js";
import express from "express";
import developerValidations from "../middlewares/validateDeveloper.js";
import errorsIsEmpty from "../middlewares/errorsIsEmpty.js";
const router = express.Router();

router.post(
  "/api/developer",
  developerValidations,
  errorsIsEmpty,
  developerControllers.create
);
router.get("/api/developer/:id", developerControllers.find);
router.patch("/api/developer/:id", developerControllers.update);
router.get("/api/developers", developerControllers.list);
router.delete("/api/developer/:id", developerControllers.destroy);
export default router;
