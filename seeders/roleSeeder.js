import Rol from "../models/Role.js";

await Rol.create({
  _id: "66465f782c0beb46d5e3d881",
  name: "admin",
});

await Rol.create({
  _id: "66465f7e2c0beb46d5e3d883",
  name: "user",
});

await Rol.create({
  _id: "66465f872c0beb46d5e3d885",
  name: "afiliado",
});

console.log("Roles creados exitocisimamente bien");
process.exit();
