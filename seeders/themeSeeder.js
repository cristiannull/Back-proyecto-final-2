import Theme from "../models/theme.js";

async function seedTheme () {
  const themes = [
{
  _id: "66484be21593a60f58e0c0a1",
  name: "Anime",
},
{
  _id: "66484bf01593a60f58e0c0a3",
  name: "Science fiction and cyberpunk",
},
{
  _id: "66484c041593a60f58e0c0a5",
  name: "Detectives and mystery",
},
{
  _id: "66484c121593a60f58e0c0a7",
  name: "Space",
},
{
  _id: "66484c191593a60f58e0c0a9",
  name: "Open world",
},
{
  _id: "6682b48f6e737adf9e6b047f",
  name: "Survival",
},
{
  _id: "6682b4a56e737adf9e6b0481",
  name: "Terror",
},
  ];
  await Theme.create(themes)
console.log("themes creados exitocisimamente bien");
}

export default seedTheme;