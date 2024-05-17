import Developer from "../models/Developer.js";

await Developer.create({
  _id: "6647c8f0d5b0a90daa03fe2d",
  name: "Shigeru Miyamoto",
});

await Developer.create({
  _id: "6647c916d5b0a90daa03fe2f",
  name: "Hideo Kojima",
});

await Developer.create({
  _id: "6647c929d5b0a90daa03fe31",
  name: "Sid Meier",
});

console.log("desarrolladores creados exitocisimamente bien");
