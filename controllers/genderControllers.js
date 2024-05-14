import Gender from "../models/gender.js";

async function create(req, res) {
  try {
    const newGender = await Gender.create({
      name: req.body.name,
    });
    res.json(newGender);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error del servidor");
  }
}

async function find(req, res) {
  try {
    const genderId = req.params.id;
    const gender = await Gender.findById(genderId);
    res.status(200).json(gender);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function list(req, res) {
  try {
    const gameList = await Gender.find();
    res.status(200).json(gameList);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function update(req, res) {
  try {
    const genderEncontrado = await Gender.findById(req.params.id);

    genderEncontrado.name = req.body.name || genderEncontrado.name;

    await genderEncontrado.save();
    res.status(200).json(genderEncontrado);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function destroy(req, res) {
  try {
    await Gender.findByIdAndDelete(req.params.id);
    res.status(200).json("gender eliminado");
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
