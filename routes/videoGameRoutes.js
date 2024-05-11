import videogameControllers from "../controllers/videogameControllers.js";
import express from "express";

const router = express.Router();

router.post("/api/videogame", videogameControllers.create);
router.get("/api/videogame/:id", videogameControllers.find);
router.get("/api/videogame", videogameControllers.list);
router.patch("/api/videogame/:id", videogameControllers.update);
router.delete("/api/videogame/:id", videogameControllers.destroy);

export default router;
