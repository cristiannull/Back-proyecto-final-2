import Developer from "../models/Developer.js";

async function create(req, res) {
  try {
    const newDeveloper = await Developer.create({
      name: req.body.name,
    });
    res.json(newDeveloper);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function find(req, res) {
  try {
    const developerId = req.params.id;
    const developer = await Developer.findById(developerId);
    res.status(200).json(developer);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function list(req, res) {
  try {
    const gameList = await Developer.find();
    res.status(200).json(gameList);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function update(req, res) {
  try {
    const developerEncontrado = await Developer.findById(req.params.id);

    developerEncontrado.name = req.body.name || developerEncontrado.name;

    await developerEncontrado.save();
    res.status(200).json(developerEncontrado);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function destroy(req, res) {
  try {
    await Developer.findByIdAndDelete(req.param.id);
    res.status(200).json("developer eliminado");
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
