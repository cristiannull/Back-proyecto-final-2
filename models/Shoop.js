import mongoose from "../config/mongoose.config.js";

const shoopSchema = mongoose.Schema({
  user: 
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
  

  videogames: [
   {
    videogameId:{
      type:mongoose.Types.ObjectId,
      required: true,
      ref:"VideoGames"
    },
    quantity:Number
   }
  ],

  total: Number,

  paymentMethod:
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "PaymentMethod",
    },
  
});

const ShoopSchema = mongoose.model("Shoop", shoopSchema);

export default ShoopSchema;

//:()
