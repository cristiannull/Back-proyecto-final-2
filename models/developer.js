import mongoose from "../config/mongoose.config.js";

const developerSchema = mongoose.Schema({
  name: String,
});

const developer = mongoose.model("Developer", developerSchema);

export default developer;