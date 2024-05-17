import Category from "../models/Category.js";

await Category.create({
  _id: "66465f782c0beb46d5e3d881",
  name: "admin",
});

await Category.create({
  _id: "66465f7e2c0beb46d5e3d883",
  name: "user",
});

await Category.create({
  _id: "66465f872c0beb46d5e3d885",
  name: "afiliado",
});

console.log("categorias creadas exitocisimamente bien");
