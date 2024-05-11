import express from "express";
import userControllers from "../controllers/userControllers.js";

const router = express.Router();

router.post("/api/users", userControllers.create);
router.get("/api/users/:id", userControllers.find);
router.get("/api/users", userControllers.list);
router.patch("/api/users/:id", userControllers.update);
router.delete("/api/users/:id", userControllers.destroy);

export default router;
