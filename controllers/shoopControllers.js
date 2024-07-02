import Shoop from "../models/Shoop.js";
import VideoGame from "../models/VideoGame.js";
import User from "../models/User.js";

async function create(req, res) {
  try {
    let total = 0;
    for (let videogame of req.body.videogames) {
      const search = await VideoGame.findById(videogame.videogameId);
      const quantity = videogame.quantity;
      total = total += search.price * quantity;
    }
    const newShop = await Shoop.create({
      user: req.auth.sub,
      videogames: req.body.videogames,
      total: total,
      paymentMethod: req.body.paymentMethod,
    });
    res.json(await newShop.populate("user videogames paymentMethod"));
  } catch (err) {
    console.log(err);
    res.status(500).json("error del servidor");
  }
}

async function find(req, res) {
  try {
    const shoopId = req.params.id;
    const shoop = await Shoop.findById(shoopId).populate("videogame user");
    res.status(200).json(shoop);
  } catch (err) {
    res.status(500).json("error del servidor");
  }
}

async function list(req, res) {
  try {
    const where = {};
    if (req.query.user) {
      const user = await User.findById(req.query.user);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      where.user = user._id;
    }
    const shoopList = await Shoop.find(where).populate(
      "videogames.videogameId user paymentMethod"
    );
    res.status(200).json(shoopList);
  } catch (err) {
    res.status(500).json("Error del Servidor");
  }
}

async function update(req, res) {
  try {
    const shoopEncontrado = await Shoop.findById(req.params.id);
    if (!shoopEncontrado) {
      return res.status(404).json({ message: "Shoop not found" });
    }

    shoopEncontrado.user = req.body.user || shoopEncontrado.user;
    shoopEncontrado.videogame = req.body.videogame || shoopEncontrado.videogame;
    shoopEncontrado.total = req.body.total || shoopEncontrado.total;
    shoopEncontrado.paymentMethod =
      req.body.paymentMethod || shoopEncontrado.paymentMethod;
    await shoopEncontrado.save();
    res.json(await shoopEncontrado.populate("videogames user paymentMethod"));
  } catch (err) {
    res.status(500).json("Error del Servidor");
  }
}

async function destroy(req, res) {
  try {
    const shoop = await Shoop.findByIdAndDelete(req.params.id);
    if (!shoop) {
      return res.status(404).json({ message: "Shoop not found" });
    }
    res.json({ message: "Shoop deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export default {
  create,
  find,
  list,
  update,
  destroy,
};
