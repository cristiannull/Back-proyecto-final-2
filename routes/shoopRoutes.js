import shoopControllers from "../controllers/shoopControllers.js";
import express from "express";

const router = express.Router();

router.post("/api/shoop", shoopControllers.create);
router.get("/api/shoop/:id", shoopControllers.find);
router.get("/api/shoops", shoopControllers.list);
router.patch("/api/shoop/:id", shoopControllers.update);
router.delete("/api/shoop/:id", shoopControllers.destroy);

export default router;
