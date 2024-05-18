import { check } from "express-validator";

const userValidations = [
  check("firstname").notEmpty(),
  check("lastname").notEmpty(),
  check("email").isEmail(),
  check("password").notEmpty(),
  check("age").isNumeric(),
  check("rol").notEmpty(),
];

export default userValidations;
