import paymentMethodControllers from "../controllers/paymentMethodControllers.js";
import express from "express";
import paymentMethodValidations from "../middlewares/validatePaymentMethod.js";
import errorsIsEmpty from "../middlewares/errorsIsEmpty.js"

const router = express.Router();

router.post("/api/paymentMethod",paymentMethodValidations,errorsIsEmpty,paymentMethodControllers.create);
router.get("/api/paymentMethod/:id",paymentMethodControllers.find);
router.patch("/api/paymentMethod/:id",paymentMethodControllers.update);
router.get("/api/paymentMethods",paymentMethodControllers.list);
router.delete("/api/paymentMethod/:id",paymentMethodControllers.destroy);
export default router;