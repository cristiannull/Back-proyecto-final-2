import Theme from "../models/theme.js";

async function seedTheme () {
  const themes = [
{
  _id: "66484be21593a60f58e0c0a1",
  name: "fantasia y magia",
},
{
  _id: "66484bf01593a60f58e0c0a3",
  name: "ciencia ficcion",
},
{
  _id: "66484c041593a60f58e0c0a5",
  name: "supervivencia",
},
{
  _id: "66484c121593a60f58e0c0a7",
  name: "mundo abierto",
},
{
  _id: "66484c191593a60f58e0c0a9",
  name: "deportes",
},
  ];
  await Theme.create(themes)
console.log("themes creados exitocisimamente bien");
}

export default seedTheme;