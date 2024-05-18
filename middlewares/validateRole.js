import { check } from "express-validator";

const roleValidations = [check("name").notEmpty()];

export default roleValidations;
