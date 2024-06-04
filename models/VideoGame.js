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

  description: {
    type: String,
    required: true,
    unique: true,
  },

  category: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Category",
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

  developer: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Developer",
    },
  ],

  video: {
    type: String,
    
  }
});

const VideoGames = mongoose.model("VideoGames", videoGamesSchema);

export default VideoGames;

//:()
