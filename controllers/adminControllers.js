import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Rol from "../models/Role.js";

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email y contraseña son requeridos" });
    }

    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Tu email o contraseña son incorrectos" });
    }

    const hashValido = await bcrypt.compare(password, user.password);
    if (!hashValido) {
      return res
        .status(401)
        .json({ message: "Tu email o contraseña son incorrectos" });
    }

    const adminRol = await Rol.findOne({ name: "admin" });
    if (!adminRol) {
      return res
        .status(500)
        .json({ message: "Rol de administrador no encontrado" });
    }

    const isAdmin = user.rol.some((rol) => rol._id.equals(adminRol._id));
    if (!isAdmin) {
      return res.status(403).json("Acceso denegado, no eres administrador");
    }

    const tokenPayload = {
      sub: user.id,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET);

    res.json({ token: token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor" });
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
