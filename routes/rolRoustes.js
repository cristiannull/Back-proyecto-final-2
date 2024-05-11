import rolControllers from "../controllers/rolControllers.js";
import express from "express";

const router = express.Router();

router.post("/api/rol", rolControllers.create);
router.get("/api/rol/:id", rolControllers.find);
router.patch("/api/rol/:id", rolControllers.update);
router.get("/api/rol", rolControllers.list);
router.delete("api/rol/:id", rolControllers.destroy);
export default router;
