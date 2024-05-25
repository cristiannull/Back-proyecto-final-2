import { check } from "express-validator";

const genderValidations = [check("name").notEmpty()];

export default genderValidations;