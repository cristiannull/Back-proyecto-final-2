import shoop from "../models/shoop.js";

async function create(req, res) {
    try {
      const newShop = await shoop.create({
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
      const shoop = await shoop.findById(shoopId).populate();
      res.status(200).json(shoop);
    } catch (err) {
      console.log(err);
      res.status(500).json("error del servidor");
    }
  }
  
  async function list(req, res) {
    try {
      const shoopList = await shoop.find().populate();
      res.status(200).json(shoopList);
    } catch (err) {
      res.status(500).json("Error del Servidor");
    }
  }
  
  async function update(req, res) {
    try {
      const shoopEncontrado = await shoop.findById(req.params.id);
  
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
      await shoop.findByIdAndDelete(req.params.id);
      res.json("Compra elimidado");
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
  