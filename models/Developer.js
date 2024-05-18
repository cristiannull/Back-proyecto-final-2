import mongoose from "../config/mongoose.config.js";

const developerSchema = mongoose.Schema({
  name: String,
});

const Developer = mongoose.model("Developer", developerSchema);

export default Developer;
