import { check } from "express-validator";

const typeOffertValidations = [check("name").notEmpty()];

export default typeOffertValidations;