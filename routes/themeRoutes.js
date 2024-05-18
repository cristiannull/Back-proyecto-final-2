import themeControllers from "../controllers/themeControllers.js";
import express from "express";

const router = express.Router();

router.post("/api/theme",themeControllers.create);
router.get("/api/theme/:id",themeControllers.find);
router.patch("/api/theme/:id",themeControllers.update);
router.get("/api/themes",themeControllers.list);
router.delete("/api/theme/:id",themeControllers.destroy);
export default router;