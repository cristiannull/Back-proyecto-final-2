import mongoose from "../config/mongoose.config.js";

const videoGamesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  price: {
    type: Number,
    required: true,
  },

  description: [
    {
      type: String,
      required: true,
      unique: true,
    },
  ],

  gamemode: [
    {
      type: mongoose.Types.ObjectId,
       required: true, 
      ref: "GameMode",
    },
  ],
  pegi: [
    {
      type: mongoose.Types.ObjectId,
       required: true, 
      ref: "Pegi",
    },
  ],
  gender: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Gender",
    },
  ],
  theme: [
    {
      type: mongoose.Types.ObjectId,
      required: true, 
      ref: "Theme",
    },
  ],

  image: [
    {
      type: String,
      required: true,
    },
  ],

  cover:[
    {
      type: String,
      required: true,
    },
  ],

  developer: [
    {
      type: mongoose.Types.ObjectId,
       required: true, 
      ref: "Developer",
    },
  ],

  videoId: {
    type: String,
required: true,
  },

  typeoffer: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Typeoffer",
    },
  ],

  systemRequirements:[
    {
      type: String,
      required: true,
    },
  ],
});



const VideoGames = mongoose.model("VideoGames", videoGamesSchema);

export default VideoGames;

//:()
