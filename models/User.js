import mongoose from "../config/mongoose.config.js";

const userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: {
    type: Number,
    required: true,
  },
  rol: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Rol",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
