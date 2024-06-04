import { check } from "express-validator";

const paymentMethodValidations = [check("name").notEmpty()];

export default paymentMethodValidations;