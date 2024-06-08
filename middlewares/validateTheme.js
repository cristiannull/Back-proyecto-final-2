import { check } from "express-validator";

const themeValidations = [check("name").notEmpty()];

export default themeValidations;