import Gender from "../models/Gender.js";

await Gender.create({
  _id: "6647c2afa55c56098a0045b5",
  name: "simulation",
});

await Gender.create({
  _id: "6647c2b7a55c56098a0045b7",
  name: "sport",
});

await Gender.create({
  _id: "6647c2c0a55c56098a0045b9",
  name: "terror",
});

console.log("generos creados exitocisimamente bien");
process.exit();
