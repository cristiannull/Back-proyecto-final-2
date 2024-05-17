import Category from "../models/Category.js";

async function create(req, res) {
  try {
    const newCategory = await Category.create({
      name: req.body.name,
    });
    res.json(newCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error del servidor");
  }
}

async function find(req, res) {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    res.status(200).json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json("Error del servidor");
  }
}

async function list(req, res) {
  try {
    const gameList = await Category.find();
    res.status(200).json(gameList);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function update(req, res) {
  try {
    const categoryEncontrado = await Category.findById(req.params.id);

    categoryEncontrado.name = req.body.name || categoryEncontrado.name;

    await categoryEncontrado.save();
    res.status(200).json(categoryEncontrado);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function destroy(req, res) {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json("category eliminada");
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
