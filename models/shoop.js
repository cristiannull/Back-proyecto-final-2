import mongoose from "../config/mongoose.config.js";

const shoopSchema = mongoose.Schema({
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        }
    ],

    videogame: [
        {
            type: mongoose.Types.ObjectId,
            ref: "VideoGames",
        }
    ],

    Total: Number,

    paymentMethod : [
        {
            type: mongoose.Types.ObjectId,
            ref: "PaymentMethod",
        }
    ],
})

const  ShoopSchema= mongoose.model("Shoop", shoopSchema);

export default ShoopSchema;