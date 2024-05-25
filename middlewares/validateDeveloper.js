import { check } from "express-validator";

const developerValidations = [check("name").notEmpty()];

export default developerValidations;