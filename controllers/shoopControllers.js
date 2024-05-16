import Shoop from "../models/shoop.js";
import VideoGame from "../models/videoGames.js";
import mongoose from "../config/mongoose.config.js";

async function create(req, res) { 
  try {
    let total=0
  for(const videogameId of req.body.videogames){
   
    const search = await VideoGame.findById(videogameId)
    total= total + search.price
    }
      const newShop = await Shoop.create({
        user: req.body.user,
        videogames: req.body.videogames,
        total: total,
        paymentMethod: req.body.paymentMethod,
      });
      res.json(newShop);
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
      console.log(err);
      res.status(500).json("error del servidor");
    }
  }
  
  async function list(req, res) {
    try {
      const shoopList = await Shoop.find().populate("videogame user");
      res.status(200).json(shoopList);
    } catch (err) {
      res.status(500).json("Error del Servidor");
    }
  }
  
  async function update(req, res) {
    try {
      const shoopEncontrado = await Shoop.findById(req.params.id);
  
      shoopEncontrado.user = req.body.user|| shoopEncontrado.user;
      shoopEncontrado.videogame = req.body.videogame || shoopEncontrado.videogame;
      shoopEncontrado.total = req.body.total || shoopEncontrado.total;
      shoopEncontrado.paymentMethod = req.body.paymentMethod || shoopEncontrado.paymentMethod;
      await shoopEncontrado.save();
      res.json(shoopEncontrado);
    } catch (err) {
      res.status(500).json("Error del Servidor");
    }
  }
  
  async function destroy(req, res) {
    try {
      await Shoop.findByIdAndDelete(req.params.id);
      res.json("Compra elimidada");
    } catch (err) {
      console.log(err);
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
  