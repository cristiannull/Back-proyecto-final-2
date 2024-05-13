import categoryControllers from "../controllers/categoryControllers.js";
import express from "express";
import category from "../models/category.js";

const router = express.Router();

router.post("/api/category", categoryControllers.create);
router.get("/api/category/:id", categoryControllers.find);
router.patch("/api/category/:id", categoryControllers.update);
router.get("/api/categorys", categoryControllers.list);
router.delete("/api/category/:id",categoryControllers.destroy);
export default router;