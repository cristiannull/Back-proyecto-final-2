import Shoop from "../models/Shoop.js";
import VideoGame from "../models/VideoGame.js";

async function seedShoop() {
  const shoopsToCreate = [
    {
      _id: "6646a3c149427943de7ac02f",
      user: "664672a4ca83a4f05f49d02e",
      paymentMethod: "66484fa8d185e084c7b0b12e",
      videogames: [
        { videogameId: "664695bacf29fe32661290d9", quantity: 1 },
        { videogameId: "6646960dcf29fe32661290dd", quantity: 2 },
      ],
    },
    {
      _id: "6646a3e449427943de7ac033",
      user: "664672c6ca83a4f05f49d034",
      paymentMethod: "66484fa8d185e084c7b0b12e",
      videogames: [{ videogameId: "66469632cf29fe32661290e3", quantity: 1 }],
    },
    {
      _id: "6646a3e549427943de7ac037",
      user: "664672bbca83a4f05f49d031",
      paymentMethod: "66484fa8d185e084c7b0b12e",
      videogames: [
        { videogameId: "664696cecf29fe32661290e9", quantity: 1 },
        { videogameId: "66469671cf29fe32661290e5", quantity: 2 },
        { videogameId: "66469686cf29fe32661290e7", quantity: 1 },
      ],
    },
    {
      _id: "6646a3e649427943de7ac03b",
      user: "664672d9ca83a4f05f49d03a",
      paymentMethod: "66484f8dd185e084c7b0b128",
      videogames: [
        { videogameId: "66469619cf29fe32661290df", quantity: 1 },
        { videogameId: "664696e5cf29fe32661290eb", quantity: 3 },
      ],
    },
    {
      _id: "6646a3f349427943de7ac03f",
      user: "664672e2ca83a4f05f49d03d",
      paymentMethod: "66484fa8d185e084c7b0b12e",
      videogames: [
        { videogameId: "66469710cf29fe32661290ef", quantity: 1 },
        { videogameId: "66469625cf29fe32661290e1", quantity: 2 },
      ],
    },
  ];

  for (let shoopToCreate of shoopsToCreate) {
    const videoGameIds = shoopToCreate.videogames.map((vg) => vg.videogameId);
    const videoGamesList = await VideoGame.find({
      _id: { $in: videoGameIds },
    });

    let totalPrice = 0;

    shoopToCreate.videogames.forEach((vg) => {
      const videoGame = videoGamesList.find(
        (game) => game._id.toString() === vg.videogameId.toString()
      );
      if (videoGame) {
        totalPrice += videoGame.price * vg.quantity;
      } else {
        console.error(`No se encontró el videojuego con ID: ${vg.videogameId}`);
      }
    });

    await Shoop.create({
      _id: shoopToCreate._id,
      user: shoopToCreate.user,
      videogames: shoopToCreate.videogames.map((vg) => ({
        videogameId: vg.videogameId,
        quantity: vg.quantity,
      })),
      total: totalPrice,
      paymentMethod: shoopToCreate.paymentMethod,
    });
  }

  console.log("shoops creados exitocisimamente bien!!");
}

export default seedShoop;
