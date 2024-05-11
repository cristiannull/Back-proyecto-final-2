import rolControllers from "../controllers/rolControllers.js";
import express from "express";

const router = express.Router();

router.post("/api/rol", rolControllers.create);

export default router;
