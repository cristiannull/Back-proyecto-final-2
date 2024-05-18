import mongoose from "../config/mongoose.config.js";

const pegiSquema = mongoose.Schema({
    name:String 
});

const Pegi = mongoose.model("Pegi",pegiSquema);

export default Pegi;