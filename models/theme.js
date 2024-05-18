import mongoose from "../config/mongoose.config.js";

const themeSquema = mongoose.Schema({
    name:String 
});

const Theme = mongoose.model("Theme",themeSquema);

export default Theme;