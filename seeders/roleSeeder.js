import Rol from "../models/Role.js";

async function seedRol() {
  const rols = [
    {
      _id: "66465f782c0beb46d5e3d881",
      name: "admin",
    },

    {
      _id: "66465f7e2c0beb46d5e3d883",
      name: "user",
    },

    {
      _id: "66465f872c0beb46d5e3d885",
      name: "afiliado",
    },
  ];

  await Rol.create(rols);

  console.log("Rols creados exitocisimamente bien!!");
}

export default seedRol;
