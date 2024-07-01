import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const hashValido = await bcrypt.compare(req.body.password, user.password);
      if (hashValido) {
        const tokenPayload = {
          sub: user.id,
          iat: Date.now(),
        };
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
          algorithm: "HS256",
        });
        res.json({ token: token });
      } else {
        res.status(401).json("Tu email o contraseña son INCORRECTOS");
      }
    } else {
      res.status(401).json("Tu email o contraseña son INCORRECTOS");
    }
  } catch (err) {
    res.status(500).json("Internal server error");
    console.log(err);
  }
}

async function tokenIsValid(req, res) {
  if (req.auth) {
    return true;
  } else {
    return false;
  }
}

export default { login, tokenIsValid };
