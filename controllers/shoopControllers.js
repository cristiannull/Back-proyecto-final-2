import Shoop from "../models/shoop.js";

async function create(req, res) {
    try {
      const newShop = await Shoop.create({
        user: req.body.user,
        videogame: req.body.videogame,
        total: req.body.total,
        paymentMethod: req.body.paymentMethod,
      });
      res.json(newShop);
    } catch (err) {
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
  