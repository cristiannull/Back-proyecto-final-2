import { check } from "express-validator";

const categoryValidations = [check("name").notEmpty()];

export default categoryValidations;