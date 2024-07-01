import Shoop from "../models/Shoop.js";
import VideoGame from "../models/VideoGame.js";

async function seedShoop () {

const ordersToCreate = [
  {
    _id: "6646a3c149427943de7ac02f",
    user: "664672a4ca83a4f05f49d02e",
    videogames: ["664695bacf29fe32661290d9", "6646960dcf29fe32661290dd"],
  },
  {
    _id: "6646a3e449427943de7ac033",
    user: "664672c6ca83a4f05f49d034",
    videogames: ["66469632cf29fe32661290e3"],
  },
  {
    _id: "6646a3e549427943de7ac037",
    user: "664672bbca83a4f05f49d031",
    videogames: [
      "664696cecf29fe32661290e9",
      "66469671cf29fe32661290e5",
      "66469686cf29fe32661290e7",
    ],
  },
  {
    _id: "6646a3e649427943de7ac03b",
    user: "664672d9ca83a4f05f49d03a",
    videogames: ["66469619cf29fe32661290df", "664696e5cf29fe32661290eb"],
  },
  {
    _id: "6646a3f349427943de7ac03f",
    user: "664672e2ca83a4f05f49d03d",
    videogames: ["66469710cf29fe32661290ef", "66469625cf29fe32661290e1"],
  },
];
await Shoop.create(ordersToCreate);
console.log("Shops creadas bien, o no? na mentira ;) ");

for (let orderToCreate of ordersToCreate) {
  const videoGamesList = await VideoGame.find({
    _id: {
      $in: orderToCreate.videogames,
    },
  });

  let totalPrice = videoGamesList.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  await Shoop.create({
    _id: orderToCreate._id,
    user: orderToCreate.user,
    videogames: orderToCreate.videogames,
    total: totalPrice,
  });
}
}

export default seedShoop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce



