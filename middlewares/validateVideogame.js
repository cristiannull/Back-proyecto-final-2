import { check } from "express-validator";

const videogameValidations = [
  check("name").notEmpty(),
  check("price").isNumeric(),
  check("description").notEmpty(),
  check("category").notEmpty(),
  check("pegi").notEmpty(),
  check("theme").notEmpty(),
  check("gender").notEmpty(),
  check("developer").notEmpty(),
];

export default videogameValidations;