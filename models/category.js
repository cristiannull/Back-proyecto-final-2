import mongoose from "../config/mongoose.config.js";

const categorySchema = mongoose.Schema({
  name: String,
});

const category = mongoose.model("Category", categorySchema);

export default category;