import mongoose from "../config/mongoose.config.js";

const PaymentMethodSquema = mongoose.Schema({
    name:String 
});

const PaymentMethod = mongoose.model("PaymentMethod",PaymentMethodSquema);

export default PaymentMethod;
