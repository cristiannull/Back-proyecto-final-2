import mongoose from "../config/mongoose.config.js";

const TypeOfferSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
  });
  
  const Typeoffer = mongoose.model("TypeOffer", TypeOfferSchema);
  
  export default Typeoffer;