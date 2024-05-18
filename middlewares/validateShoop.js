import { check } from "express-validator";

const shoopValidations = [
  check("user").notEmpty(),
  check("videogames").notEmpty(),
  check("paymentMethod").notEmpty(),
];

export default shoopValidations;