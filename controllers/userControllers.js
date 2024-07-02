import User from "../models/User.js";
import bcrypt from "bcryptjs";
import Rol from "../models/Role.js";
import jwt from "jsonwebtoken";

async function create(req, res) {
  try {
    const { firstname, lastname, email, password, age } = req.body;

    if (!firstname || !lastname || !email || !password || !age) {
      return res.status(400).json({
        message:
          "Todos los campos son obligatorios y age debe ser un número válido",
      });
    }

    const hash = await bcrypt.hash(password, 10);
    const defaultRol = await Rol.findOne({ name: "user" });

    if (!defaultRol) {
      return res
        .status(500)
        .json({ message: "Rol predeterminado no encontrado" });
    }

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hash,
      age: Number(age),
      rol: [defaultRol._id],
    });

    const tokenPayload = {
      sub: User.id,
      iat: Date.now(),
    };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET);

    res.json({
      user: await newUser.populate("rol"),
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("Error del servidor");
  }
}

async function find(req, res) {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).populate("rol");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json("error del servidor");
  }
}

async function list(req, res) {
  try {
    const userList = await User.find().populate("rol");
    res.status(200).json(userList);
  } catch (err) {
    res.status(500).json("Error del Servidor");
  }
}

async function update(req, res) {
  try {
    const usuarioEncontrado = await User.findById(req.params.id);

    usuarioEncontrado.firstname =
      req.body.firstname || usuarioEncontrado.firstname;
    usuarioEncontrado.lastname =
      req.body.lastname || usuarioEncontrado.lastname;
    usuarioEncontrado.age = req.body.age || usuarioEncontrado.age;
    usuarioEncontrado.email = req.body.email || usuarioEncontrado.email;
    usuarioEncontrado.rol = req.body.rol || usuarioEncontrado.rol;

    if (req.body.password && req.body.password.trim() !== "") {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      usuarioEncontrado.password = hashedPassword;
    }
    await usuarioEncontrado.save();
    res.status(200).json(usuarioEncontrado);
  } catch (err) {
    res.status(500).json("Error del Servidor");
  }
}

async function destroy(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json("Usuario elimidado");
  } catch (err) {
    res.status(500).json("Error del Servidor");
  }
}

export default {
  create,
  find,
  list,
  update,
  destroy,
};
