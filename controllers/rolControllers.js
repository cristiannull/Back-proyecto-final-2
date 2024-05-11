import rol from "../models/rols.js";

async function create(req, res) {
  try {
    const newRol = await rol
      .create({
        name: req.body.name,
      })
      .populate("rol");
    res.json(newRol);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

export default {
  create,
};
