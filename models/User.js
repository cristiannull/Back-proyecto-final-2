import mongoose from "../config/mongoose.config.js";

const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  rol: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Rol",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
