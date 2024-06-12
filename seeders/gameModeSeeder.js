import GameMode from "../models/GameMode.js";

await GameMode.create({
  _id: "6647baff9c8f74c7a883b5b0",
  name: "solitary",
});

await GameMode.create({
  _id: "6647bb2e9c8f74c7a883b5b2",
  name: "family",
});

await GameMode.create({
  _id: "6647bb759c8f74c7a883b5b4",
  name: "multiplayer",
});

console.log("GameModes creadas re melas rey");
process.exit();
