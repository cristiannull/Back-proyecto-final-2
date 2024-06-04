import pegiControllers from "../controllers/pegiControllers.js";
import express from "express";
import pegiValidations from "../middlewares/validatePegi.js";
import errorsIsEmpty from "../middlewares/errorsIsEmpty.js"

const router = express.Router();

router.post("/api/pegi",pegiValidations,errorsIsEmpty,pegiControllers.create);
router.get("/api/pegi/:id",pegiControllers.find);
router.patch("/api/pegi/:id",pegiControllers.update);
router.get("/api/pegis",pegiControllers.list);
router.delete("/api/pegi/:id",pegiControllers.destroy);
export default router;

