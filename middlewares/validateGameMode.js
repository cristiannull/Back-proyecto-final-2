import { check } from "express-validator";

const gameModeValidations = [check("name").notEmpty()];

export default gameModeValidations;