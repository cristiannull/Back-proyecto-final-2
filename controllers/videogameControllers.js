import videoGame from "../models/VideoGame.js";

async function create(req, res) {
  try {
    const newGame = await videoGame.create({
      name: req.body.name,
      category: req.body.category,
      pegi: req.body.pegi,
      gender: req.body.gender,
      theme: req.body.theme,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
    });
    res.json(newGame);
  } catch (err) {
    res.status(500).json("error del servidor");
  }
}

async function find(req, res) {
  try {
    const gameId = req.params.id;
    const game = await videoGame.findById(gameId).populate();
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json("error del servidor");
  }
}

async function list(req, res) {
  try {
    const gameList = await videoGame.find().populate();
    res.status(200).json(gameList);
  } catch (err) {
    res.status(500).json("Error del Servidor");
  }
}

async function update(req, res) {
  try {
    const gameEncontrado = await videoGame.findById(req.params.id);

    gameEncontrado.name = req.body.name || gameEncontrado.name;
    gameEncontrado.category = req.body.category || gameEncontrado.category;
    gameEncontrado.pegi = req.body.pegi || gameEncontrado.pegi;
    gameEncontrado.gender = req.body.gender || gameEncontrado.gender;
    gameEncontrado.theme = req.body.theme || gameEncontrado.theme;
    gameEncontrado.image = req.body.image || gameEncontrado.image;
    gameEncontrado.price = req.body.price || gameEncontrado.price;
    gameEncontrado.description =
      req.body.description || gameEncontrado.description;

    await gameEncontrado.save();
    res.json(gameEncontrado);
  } catch (err) {
    res.status(500).json("Error del Servidor");
  }
}

async function destroy(req, res) {
  try {
    await videoGame.findByIdAndDelete(req.params.id);
    res.json("Videojuego elimidado");
  } catch (err) {
    res.status(500).json("Error del Servidor :(");
  }
}

export default {
  create,
  find,
  list,
  update,
  destroy,
};
