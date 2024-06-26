import Gender from "../models/Gender.js";

async function seedGenders () {
  const genders =[
{
  _id: "6647c2afa55c56098a0045b5",
  name: "Action",
},
{
  _id: "6647c2b7a55c56098a0045b7",
  name: "Arcade and rhythm",
},
{
  _id: "6647c2c0a55c56098a0045b9",
  name: "First-person shooters",
},
{
  _id: "667a18d6a8690df7c03811d1",
  name: "Hack and slash",
},
{
  _id: "667a193d4ce6afb0961b4843",
  name: "Fighting and martial arts",
},
{
  _id: "667a19d75a9c4856b2a85504",
  name: "Shooters",
},
{
  _id: "667a1a26c9057cb5b07f0a82",
  name: "Platform and brokers",
},
{
  _id: "667a1a826029915da03f68ee",
  name: "Adventure",
},
{
  _id: "667a1b39dd02289afc20d218",
  name: "Good plot",
},
{
  _id: "667a1bed62299d1cc5339373",
  name: "Casuales",
},
{
  _id: "667a1c5312db92382807d92e",
  name: "Metroidvania",
},
{
  _id: "667a1c91b211d4caf3df50aa",
  name: "Visual novels",
},
{
  _id: "667a1d0204585411b80622a0",
  name: "Hidden Objects",
},
{
  _id: "667a1d3a12c3b76a4dc04ef4",
  name: "Puzzles",
},
{
  _id: "667a1d74a1f46f310a7c8008",
  name: "Adventure RPG",
},
{
  _id: "667a1dc306d8dc892b3f5c66",
  name: "Role",
},
{
  _id: "667a1df8d06943ec09b0c0bd",
  name: "In a group",
},
{
  _id: "667a1e451f54e00ca4fb6d44",
  name: "By turns",
},
{
  _id: "667a1e8ab682ebc59ca7f70b",
  name: "Roguelike",
},
{
  _id: "667a3a46b5a8252a79fdf4f7",
  name: "Action role",
},
{
  _id: "667a3b1d0fdbc3f2c155b5e1",
  name: "Strategic role",
},
{
  _id: "667a3b9a28fd889fd2d554ff",
  name: "Japanese role playing",
},
{
  _id: "667a3d688884fd1d52c2955d",
  name: "Simulation",
},
{
  _id: "667a3dcf45783a206c1f9d9e",
  name: "Hobbies and jobs",
},
{
  _id: "667a3e56228156bf9c675627",
  name: "Agriculture and manufacturing",
},
{
  _id: "667a3e8c228156bf9c675629",
  name: "Dating",
},
{
  _id: "667a3eeb8039be59161eb637",
  name: "Construction and automation",
},
{
  _id: "667a3faa02317e6fe4af2c4a",
  name: "Lifelike and immersive",
},
{
  _id: "667a4014832c94a265851aff",
  name: "Space and flight",
},
{
  _id: "667a40a88f6999bf45686450",
  name: "Sandbox and physics",
},
{
  _id: "667a42278f6999bf45686452",
  name: "Strategy",
},
{
  _id: "667a427f27c52f8cf6502bb3",
  name: "Cards and table",
},
{
  _id: "667a431ff4bf32b8a1104c31",
  name: "Cities and settlements",
},
{
  _id: "667a4347ac46841395298297",
  name: "tower defense",
},
{
  _id: "667a437e267a07bfa6f76e05",
  name: "Real time strategy",
},
{
  _id: "667a43a65d77692621f8bd0c",
  name: "Turn-based strategy",
},
{
  _id: "667a43ca5d77692621f8bd10",
  name: "Grand strategy and 4X",
},
{
  _id: "667a442147c00505688c5368",
  name: "Military",
},
{
  _id: "667a44489260c47b462a9acd",
  name: "Sports and racing",
},
{
  _id: "667a4481700ae902f877064f",
  name: "Careers",
},
{
  _id: "667a44d19c642fa5ec88ee26",
  name: "team sports",
},
{
  _id: "667a44f8144276e1c8768e97",
  name: "individual sports",
},
{
  _id: "667a4535eddc0499bb28586b",
  name: "Fishing and hunting",
},
{
  _id: "667a45864802ab3044410f25",
  name: "racing simulator",
},
{
  _id: "667a45b342f35eff5e102a5b",
  name: "sports simulator",
},
{
  _id: "667a45e90cce19a769558be5",
  name: "All the sports",
},
  ];
  await Gender.create(genders); 
  console.log("generos creados exitocisimamente bien");
}

export default seedGenders;