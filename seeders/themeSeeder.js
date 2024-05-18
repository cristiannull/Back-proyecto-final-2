import Theme from "../models/theme.js";

await Theme.create({
  _id: "66484be21593a60f58e0c0a1",
  name: "fantasia y magia",
});

await Theme.create({
  _id: "66484bf01593a60f58e0c0a3",
  name: "ciencia ficcion",
});

await Theme.create({
  _id: "66484c041593a60f58e0c0a5",
  name: "supervivencia",
});

await Theme.create({
    _id: "66484c121593a60f58e0c0a7",
    name: "mundo abierto",
  });
  
  await Theme.create({
    _id: "66484c191593a60f58e0c0a9",
    name: "deportes",
  });

console.log("themes creados exitocisimamente bien");
