import { check } from "express-validator";

const pegiValidations = [check("name").notEmpty()];

export default pegiValidations;