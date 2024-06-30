import Pegi from "../models/pegi.js";

async function seedPegi () {
  const pegis = [
{
  _id: "664846fda7e41a4b4a090abb",
  name: "PEGI 3",
},

{
  _id: "6648470ca7e41a4b4a090abd",
  name: "PEGI 7",
},

{
  _id: "66484719a7e41a4b4a090abf",
  name: "PEGI 12",
},

{
  _id: "66484727a7e41a4b4a090ac1",
  name: "PEGI 16",
},

{
  _id: "6648473ba7e41a4b4a090ac3",
  name: "PEGI 18",
},
  ];
  await Pegi.create(pegis);
  console.log("pegis creados exitocisimamente bien");
}

export default seedPegi;




