import videoGame from "../models/VideoGame.js";
import Typeoffer from "../models/TypeOffer.js";
import Gender from "../models/Gender.js";
import Theme from "../models/theme.js";
import GameMode from "../models/GameMode.js";
import Pegi from "../models/pegi.js";

async function create(req, res) {
  try {
    const newGame = await videoGame.create({
      name: req.body.name,
      gamemode: req.body.gamemode,
      pegi: req.body.pegi,
      gender: req.body.gender,
      theme: req.body.theme,
      image: req.file.filename,
      price: req.body.price,
      developer: req.body.developer,
      description: req.body.description,
      video: req.body.video,
      typeoffer: req.body.typeoffer,
    });
    res.json(
      await newGame.populate("gamemode pegi gender theme developer typeoffer")
    );
  } catch (err) {
    console.log(err);
    res.status(500).json("error del servidor");
  }
}

async function findName(req, res) {
  try {
    const gameId = req.params.name;
    const game = await videoGame
      .find({ name: gameId })
      .populate("gamemode pegi gender theme developer typeoffer");
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json("error del servidor");
  }
}

async function findId(req, res) {
  try {
    const gameId = req.params.id;
    const game = await videoGame
      .findById(gameId)
      .populate("gamemode pegi gender theme developer typeoffer");
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json("error del servidor");
  }
}

async function list(req, res) {
  try {
    const { page = 1, limit = 52 } = req.query;

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      populate: [
        { path: "gamemode" },
        { path: "pegi" },
        { path: "gender" },
        { path: "theme" },
        { path: "developer" },
        { path: "typeoffer" },
      ],
    };

    const skip = (options.page - 1) * options.limit;
    const where = {};

    if (req.query.typeoffer) {
      const typeoffer = await Typeoffer.findOne({ name: req.query.typeoffer });
      where.typeoffer = typeoffer.id;
    }

    if (req.query.gender) {
      const gender = await Gender.findOne({ name: req.query.gender });
      where.gender = gender.id;
    }

    if (req.query.theme) {
      const theme = await Theme.findOne({ name: req.query.theme });
      where.theme = theme.id;
    }

    if (req.query.gamemode) {
      const gamemode = await GameMode.findOne({ name: req.query.gamemode });
      where.gamemode = gamemode.id;
    }

    if (req.query.pegi) {
      const pegi = await Pegi.findOne({ name: req.query.pegi });
      where.pegi = pegi.id;
    }

    const games = await videoGame
      .find(where)
      .populate(options.populate)
      .skip(skip)
      .limit(limit);

    const totalItems = await videoGame.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    let nextPage = null;
    if (options.page < totalPages) {
      nextPage = `/api/videogame?page=${options.page + 1}&limit=${limit}`;
    }

    res.status(200).json({
      data: games,
      pagination: {
        totalItems,
        totalPages,
        currentPage: options.page,
        nextPage,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json("Error del Servidor");
  }
}

async function update(req, res) {
  try {
    const gameEncontrado = await videoGame.findById(req.params.id);

    gameEncontrado.name = req.body.name || gameEncontrado.name;
    gameEncontrado.gamemode = req.body.gamemode || gameEncontrado.gamemode;
    gameEncontrado.pegi = req.body.pegi || gameEncontrado.pegi;
    gameEncontrado.gender = req.body.gender || gameEncontrado.gender;
    gameEncontrado.theme = req.body.theme || gameEncontrado.theme;
    gameEncontrado.image = req.body.image || gameEncontrado.image;
    gameEncontrado.price = req.body.price || gameEncontrado.price;
    gameEncontrado.description =
      req.body.description || gameEncontrado.description;
    gameEncontrado.video = req.body.video || gameEncontrado.video;
    gameEncontrado.typeoffer = req.body.typeoffer || gameEncontrado.typeoffer;

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
  findId,
  findName,
  list,
  update,
  destroy,
};
