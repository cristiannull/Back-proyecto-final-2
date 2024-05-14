import mongoose from "../config/mongoose.config.js";

const genderSchema = mongoose.Schema({
  name: String,
});

const gender = mongoose.model("gender", genderSchema);

export default gender;