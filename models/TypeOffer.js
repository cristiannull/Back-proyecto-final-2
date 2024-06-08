import mongoose from "../config/mongoose.config.js";

const TypeOfferSchema = mongoose.Schema({
    name:String,
  });
  
  const Typeoffer = mongoose.model("Typeoffer", TypeOfferSchema);
  
  export default Typeoffer;