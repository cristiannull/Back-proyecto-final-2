import mongoose from "../config/mongoose.config.js";

const genderSchema = mongoose.Schema({
  name: String,
});

const Gender = mongoose.model("Gender", genderSchema);

export default Gender;
