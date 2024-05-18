import { validationResult } from "express-validator";

function errorsIsEmpty(req, res, next) {
  const resultado = validationResult(req);

  if (resultado.errors.length !== 0) {
    return res.status(400).json("Hay un par de errores");
  } else {
    next();
  }
}

export default errorsIsEmpty;
