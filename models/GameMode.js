import mongoose from "../config/mongoose.config.js";

const gameModeSchema = mongoose.Schema({
  name: String,
});

const GameMode = mongoose.model("GameMode", gameModeSchema);

export default GameMode;
