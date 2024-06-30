import GameMode from "../models/GameMode.js";

async function seedGameModes () {
  const gamemodes =[
{
  _id: "6647baff9c8f74c7a883b5b0",
  name: "Competitive Online",
},
{
  _id: "6647bb2e9c8f74c7a883b5b2",
  name: "Cooperative",
},
{
  _id: "6647bb759c8f74c7a883b5b4",
  name: "LAN",
},
{
_id: "667a0f04858fd4b34849958e",
name:"Local and group",
},
{
  _id: "667a0facbb334619d489172c",
  name:"Multiplayer",
  },
  {
    _id: "667a100a86306cb5cd120f7f",
    name:"Online Multiplayer",
    },
    {
      _id: "667a103e1e8e1ad8cc7ffc9c",
      name:"Single player",
      },
  ];
  await GameMode.create(gamemodes); 
  console.log("GameModes creadas re melas rey");
}

export default seedGameModes;
