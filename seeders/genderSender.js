import Gender from "../models/Gender.js";

await Gender.create({
  _id: "66465f782c0beb46d5e3d881",
  name: "admin",
});

await Gender.create({
  _id: "66465f7e2c0beb46d5e3d883",
  name: "user",
});

await Gender.create({
  _id: "66465f872c0beb46d5e3d885",
  name: "afiliado",
});

console.log("generos creados exitocisimamente bien");
