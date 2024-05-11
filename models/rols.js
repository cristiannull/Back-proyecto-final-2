import mongoose from "../config/mongoose.config.js";

const rolsSchema = mongoose.Schema({
  name: String,
});

const Rol = mongoose.model("Rol", rolsSchema);

export default Rol;
