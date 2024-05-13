import Rol from "../models/rols.js";

async function create(req, res) {
  try {
    const newRol = await Rol.create({
      name: req.body.name,
    });
    res.json(newRol);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function find(req, res) {
  try {
    const rolId = req.params.id;
    const rol = await Rol.findById(rolId);
    res.status(200).json(rol);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function list(req, res) {
  try {
    const userlist = await Rol.find();
    res.status(200).json(userlist);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function update(req, res) {
  try {
    const rolEncontrado = await Rol.findById(req.params.id);

    rolEncontrado.name = req.rolEncontrado.name || rolEncontrado.name;

    await rolEncontrado.save();
    res.status(200).json(rolEncontrado);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function destroy(req, res) {
  try {
    await Rol.findByIdAndDelete(req.param.id);
    res.status(200).json("Rol eliminado");
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

export default {
  create,
  find,
  list,
  update,
  destroy,
};
