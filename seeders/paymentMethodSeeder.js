import PaymentMethod from "../models/PaymentMethod.js";

async function seedPaymentMethod () {
const paymentMethods = [
{
  _id: "66484f81d185e084c7b0b126",
  name: "falabellacard",
},

{
  _id: "66484f8dd185e084c7b0b128",
  name: "bbvacard",
},

{
  _id: "66484f98d185e084c7b0b12a",
  name: "mastercard",
},

{
  _id: "66484f9ed185e084c7b0b12c",
  name: "visacard",
},

{
  _id: "66484fa8d185e084c7b0b12e",
  name: "goldencard",
},
];
await PaymentMethod.create(paymentMethods);
console.log("paymentMethods creados muy bien pa :)");
}

export default seedPaymentMethod



