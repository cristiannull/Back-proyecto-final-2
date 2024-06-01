import PaymentMethod from "../models/PaymentMethod.js";

await PaymentMethod.create({
  _id: "66484f81d185e084c7b0b126",
  name: "falabellacard",
});

await PaymentMethod.create({
  _id: "66484f8dd185e084c7b0b128",
  name: "bbvacard",
});

await PaymentMethod.create({
  _id: "66484f98d185e084c7b0b12a",
  name: "mastercard",
});

await PaymentMethod.create({
  _id: "66484f9ed185e084c7b0b12c",
  name: "visacard",
});

await PaymentMethod.create({
  _id: "66484fa8d185e084c7b0b12e",
  name: "goldencard",
});

console.log("paymentMethods creados exitocisimamente bien");
process.exit();
