import User from "../models/users.js";
import bcrypt from "bcryptjs";

async function seedUsers() {
  const users = [
    {
      _id: "66467269ca83a4f05f49d028",
      firstname: "Pepe",
      lastname: "Milanesa",
      email: "milanesapepe@pep.com",
      password: "contraseña esperada",
      rol: "66465f782c0beb46d5e3d881",
    },
    {
      _id: "66467296ca83a4f05f49d02b",
      firstname: "Ronald",
      lastname: "McDonald",
      email: "ronaldmcdonal@mcdonals.com",
      password: "holaronald",
      rol: "66465f782c0beb46d5e3d881",
    },
    {
      _id: "664672a4ca83a4f05f49d02e",
      firstname: "Cristiano",
      lastname: "Ronaldo",
      email: "cristianoronaldo@suuu.com",
      password: "holacristiano",
      rol: "66465f7e2c0beb46d5e3d883",
    },
    {
      _id: "664672bbca83a4f05f49d031",
      firstname: "Lionel",
      lastname: "Messi",
      email: "lionelmessi@bobo.com",
      password: "holamessi",
      rol: "66465f7e2c0beb46d5e3d883",
    },
    {
      _id: "664672c6ca83a4f05f49d034",
      firstname: "Diego",
      lastname: "Maradona",
      email: "diegomaradona@coca.com",
      password: "holadiego",
      rol: "66465f7e2c0beb46d5e3d883",
    },
    {
      _id: "664672d1ca83a4f05f49d037",
      firstname: "Michael",
      lastname: "Jackson",
      email: "michaeljackson@hehe.com",
      password: "holamichael",
      rol: "66465f872c0beb46d5e3d885",
    },
    {
      _id: "664672d9ca83a4f05f49d03a",
      firstname: "Bill",
      lastname: "Gates",
      email: "billgates@microsoft.com",
      password: "holabill",
      rol: "66465f872c0beb46d5e3d885",
    },
    {
      _id: "664672e2ca83a4f05f49d03d",
      firstname: "Elon",
      lastname: "Musk",
      email: "elonmusk@tesla.com",
      password: "holaelon",
      rol: "66465f872c0beb46d5e3d885",
    },
    {
      _id: "664672e9ca83a4f05f49d040",
      firstname: "Homero",
      lastname: "Simpson",
      email: "homerosimpson@dou.com",
      password: "holahomero",
      rol: "66465f7e2c0beb46d5e3d883",
    },
    {
      _id: "664672efca83a4f05f49d043",
      firstname: "Pablo",
      lastname: "Backyardigans",
      email: "pablobackyardigans@discobery.com",
      password: "holapablo",
      rol: "66465f7e2c0beb46d5e3d883",
    },
  ];

  for (let userData of users) {
    userData.password = await bcrypt.hash(userData.password, 10);
    await User.create(userData);
  }

  console.log("Usuarios creados exitosamente");
}

seedUsers();
