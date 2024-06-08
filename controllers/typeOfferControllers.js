import Typeoffer from "../models/TypeOffer.js";

async function create(req, res) {
  try {
    const newTypeoffer = await Typeoffer.create({
      name: req.body.name,
    });
    res.json(newTypeoffer);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function find(req, res) {
  try {
    const typeofferId = req.params.id;
    const typeoffer = await Typeoffer.findById(typeofferId);
    res.status(200).json(typeoffer);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function list(req, res) {
  try {
    const typeofferList = await Typeoffer.find();
    res.status(200).json(typeofferList);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function update(req, res) {
  try {
    const typeofferEncontrado = await Typeoffer.findById(req.params.id);

    typeofferEncontrado.name = req.body.name || typeofferEncontrado.name;

    await typeofferEncontrado.save();
    res.status(200).json(typeofferEncontrado);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function destroy(req, res) {
  try {
    await Typeoffer.findByIdAndDelete(req.params.id);
    res.status(200).json("Typeoffer eliminado");
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