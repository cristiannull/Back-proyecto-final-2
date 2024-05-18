import mongoose from "../config/mongoose.config.js";

const rolsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Rol = mongoose.model("Rol", rolsSchema);

export default Rol;
