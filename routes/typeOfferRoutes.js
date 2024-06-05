import typeofferControllers from "../controllers/typeOfferControllers.js";
import express from "express";
import typeofferValidations from "../middlewares/validateTypeOffer.js";
import errorsIsEmpty from "../middlewares/errorsIsEmpty.js"

const router = express.Router();

router.post("/api/typeoffer",typeofferValidations,errorsIsEmpty,typeofferControllers.create);
router.get("/api/typeoffer/:id",typeofferControllers.find);
router.patch("/api/typeoffer/:id",typeofferControllers.update);
router.get("/api/typeoffers",typeofferControllers.list);
router.delete("/api/typeoffer/:id",typeofferControllers.destroy);
export default router;