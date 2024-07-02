import PaymentMethod from "../models/PaymentMethod.js";

async function seedPaymentMethod() {
  const paymentMethods = [
    {
      _id: "66484f81d185e084c7b0b126",
      name: "Falabella Card",
    },

    {
      _id: "66484f8dd185e084c7b0b128",
      name: "PayPal",
    },

    {
      _id: "66484f98d185e084c7b0b12a",
      name: "Mastercard",
    },

    {
      _id: "66484f9ed185e084c7b0b12c",
      name: "Visa",
    },

    {
      _id: "66484fa8d185e084c7b0b12e",
      name: "Goldencard",
    },

    {
      _id: "66844ece7458f17f3282056f",
      name: "Nequi",
    },
  ];
  await PaymentMethod.create(paymentMethods);
  console.log("paymentMethods creados muy bien pa :)");
}

export default seedPaymentMethod;
