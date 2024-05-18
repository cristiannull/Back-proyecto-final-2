import pegiControllers from "../controllers/pegiControllers.js";
import express from "express";

const router = express.Router();

router.post("/api/pegi",pegiControllers.create);
router.get("/api/pegi/:id",pegiControllers.find);
router.patch("/api/pegi/:id",pegiControllers.update);
router.get("/api/pegis",pegiControllers.list);
router.delete("/api/pegi/:id",pegiControllers.destroy);
export default router;
