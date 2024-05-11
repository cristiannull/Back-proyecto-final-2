import mongoose from "../config/mongoose.config.js";

const videoGamesSchema = mongoose.Schema({
    name: String, 
    category: [{
        type: mongoose.Types.ObjectId, 
        ref: "Category"
    }],
    pegi: [{
        type: mongoose.Types.ObjectId, 
        ref: "Pegi"
    }],
    gender: [{
        type: mongoose.Types.ObjectId, 
        ref: "Gender"
    }],
    theme: [{
        type: mongoose.Types.ObjectId, 
        ref: "Theme"
    }],
    
    image: [{
        tipe: mongoose.Types.ObjectId,
        ref:"Image"
    }],
    price: Number,
    description: String
})

const VideoGames = mongoose.model("VideoGames", videoGamesSchema);

export default VideoGames