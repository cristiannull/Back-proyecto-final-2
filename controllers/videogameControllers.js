import videoGame from "../models/VideoGame.js";
import Typeoffer from "../models/TypeOffer.js";
import Pegi from "../models/pegi.js";

async function create(req, res) {
  try {
    const newGame = await videoGame.create({
      name: req.body.name,
      category: req.body.category,
      pegi: req.body.pegi,
      gender: req.body.gender,
      theme: req.body.theme,
      image: req.file.filename,
      price: req.body.price,
      developer: req.body.developer,
      description: req.body.description,
      video: req.body.video,
      typeoffer:req.body.typeoffer
    });
    res.json(await newGame.populate("category pegi gender theme developer typeoffer"));
  } catch (err) {
    console.log(err);
    res.status(500).json("error del servidor");
  }
}

async function find(req, res) {
  try {
    const gameId = req.params.id;
    const game = await videoGame
      .findById(gameId)
      .populate("category pegi gender theme developer typeoffer");
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
        { path: "category" },
        { path: "pegi" },
        { path: "gender" },
        { path: "theme" },
        { path: "developer" },
        { path: "typeoffer" },
      ],
    };

    const skip = (options.page - 1) * options.limit;
    const where = {};

    if (req.query.pegi) {
      const pegi = await Pegi.findOne({name: req.query.pegi.toUpperCase()})
      where.pegi = pegi.id;
    }

    if (req.query.typeoffer) {
      const typeoffer= await Typeoffer.findOne({name: req.query.typeoffer.toUpperCase()})
      where.typeoffer = typeoffer.id;
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
    gameEncontrado.category = req.body.category || gameEncontrado.category;
    gameEncontrado.pegi = req.body.pegi || gameEncontrado.pegi;
    gameEncontrado.gender = req.body.gender || gameEncontrado.gender;
    gameEncontrado.theme = req.body.theme || gameEncontrado.theme;
    gameEncontrado.image = req.body.image || gameEncontrado.image;
    gameEncontrado.price = req.body.price || gameEncontrado.price;
    gameEncontrado.description =
      req.body.description || gameEncontrado.description;
    gameEncontrado.video = req.body.video || gameEncontrado.video;
    gameEncontrado.typeoffer= req.body.typeoffer || gameEncontrado.typeoffer

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
