import GameMode from "../models/GameMode.js";

async function create(req, res) {
  try {
    const newGameMode = await GameMode.create({
      name: req.body.name,
    });
    res.json(newGameMode);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function find(req, res) {
  try {
    const gameModeId = req.params.id;
    const gameMode = await GameMode.findById(gameModeId);
    res.status(200).json(gameMode);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function list(req, res) {
  try {
    const gameModeList = await GameMode.find();
    res.status(200).json(gameModeList);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function update(req, res) {
  try {
    const gameModeIsFound = await GameMode.findById(req.params.id);

    gameModeIsFound.name = req.body.name || gameModeIsFound.name;

    await gameModeIsFound.save();
    res.status(200).json(gameModeIsFound);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function destroy(req, res) {
  try {
    await GameMode.findByIdAndDelete(req.params.id);
    res.json("Gamemode delete");
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
