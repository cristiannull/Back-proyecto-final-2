import gameModeControllers from "../controllers/gameModeControllers.js";
import express from "express";
import gameModeValidations from "../middlewares/validateGameMode.js";
import errorsIsEmpty from "../middlewares/errorsIsEmpty.js"
const router = express.Router();

router.post("/api/gamemode",gameModeValidations, errorsIsEmpty, gameModeControllers.create);
router.get("/api/gamemode/:id", gameModeControllers.find);
router.patch("/api/gamemode/:id", gameModeControllers.update);
router.get("/api/gamemodes", gameModeControllers.list);
router.delete("/api/gamemode/:id", gameModeControllers.destroy);

export default router;
