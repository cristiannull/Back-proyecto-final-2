import genderControllers from "../controllers/genderControllers.js";
import express from "express";

const router = express.Router();

router.post("/api/gender", genderControllers.create);
router.get("/api/gender/:id", genderControllers.find);
router.patch("/api/gender/:id", genderControllers.update);
router.get("/api/genders", genderControllers.list);
router.delete("/api/gender/:id",genderControllers.destroy);
export default router;