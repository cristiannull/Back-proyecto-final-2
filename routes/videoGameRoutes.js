import videogameControllers from "../controllers/videogameControllers.js";
import express from "express";

import videogameValidations from "../middlewares/validateVideogame.js";
import errorsIsEmpty from "../middlewares/errorsIsEmpty.js";

const router = express.Router();

router.post(
  "/api/videogame",
  videogameValidations,
  errorsIsEmpty,
  videogameControllers.create
);
router.get("/api/videogame/:name", videogameControllers.findName);
router.get("/api/videogamebyid/:id", videogameControllers.findId);
router.get("/api/videogame", videogameControllers.list);
router.patch("/api/videogame/:id", videogameControllers.update);
router.delete("/api/videogame/:id", videogameControllers.destroy);

export default router;
