import User from "../models/User.js";
import bcrypt from "bcryptjs";

async function seedUsers() {
  const users = [
    {
      _id: "66467269ca83a4f05f49d003",
      firstname: "Pepe",
      lastname: "Milanesa",
      email: "milanesapepe@pep.com",
      password: "contraseña esperada",
      age: 20,
      rol: "66465f782c0beb46d5e3d881",
    },
    {
      _id: "66467296ca83a4f05f49d02b",
      firstname: "Ronald",
      lastname: "McDonald",
      email: "ronaldmcdonal@mcdonals.com",
      password: "holaronald",
      age: 17,
      rol: "66465f782c0beb46d5e3d881",
    },
    {
      _id: "664672a4ca83a4f05f49d02e",
      firstname: "Cristiano",
      lastname: "Ronaldo",
      email: "cristianoronaldo@suuu.com",
      password: "holacristiano",
      age: 39,
      rol: "66465f7e2c0beb46d5e3d883",
    },
    {
      _id: "664672bbca83a4f05f49d031",
      firstname: "Lionel",
      lastname: "Messi",
      email: "lionelmessi@bobo.com",
      password: "holamesi",
      age: 36,
      rol: "66465f7e2c0beb46d5e3d883",
    },
    {
      _id: "664672c6ca83a4f05f49d034",
      firstname: "Diego",
      lastname: "Maradona",
      email: "diegomaradona@coca.com",
      password: "holadiego",
      age: 70,
      rol: "66465f7e2c0beb46d5e3d883",
    },
    {
      _id: "664672d1ca83a4f05f49d037",
      firstname: "Michael",
      lastname: "Jackson",
      email: "michaeljackson@hehe.com",
      password: "holamichael",
      age: 50,
      rol: "66465f872c0beb46d5e3d885",
    },
    {
      _id: "664672d9ca83a4f05f49d03a",
      firstname: "Bill",
      lastname: "Gates",
      email: "billgates@microsoft.com",
      password: "holabill",
      age: 64,
      rol: "66465f872c0beb46d5e3d885",
    },
    {
      _id: "664672e2ca83a4f05f49d03d",
      firstname: "Elon",
      lastname: "Musk",
      email: "elonmusk@tesla.com",
      password: "holaelon",
      age: 45,
      rol: "66465f872c0beb46d5e3d885",
    },
    {
      _id: "664672e9ca83a4f05f49d040",
      firstname: "Homero",
      lastname: "Simpson",
      email: "homerosimpson@dou.com",
      password: "holahomero",
      age: 46,
      rol: "66465f7e2c0beb46d5e3d883",
    },
    {
      _id: "664672efca83a4f05f49d043",
      firstname: "Pablo",
      lastname: "Backyardigans",
      email: "pablobackyardigans@discobery.com",
      password: "holapablo",
      age: 16,
      rol: "66465f7e2c0beb46d5e3d883",
    },
  ];

  try {
    for (let userData of users) {
      userData.password = await bcrypt.hash(userData.password, 10);
    }

    await User.create(users);
    console.log("Users creados exitocisimamente");
  } catch (error) {
    console.error("Error al crear usuarios:", error);
  }
}

export default seedUsers;
