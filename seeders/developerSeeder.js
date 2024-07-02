import Developer from "../models/Developer.js";

async function seedDeveloper () {
 const developers = [
{
  _id: "6647c8f0d5b0a90daa03fe2d",
  name: "Shigeru Miyamoto",
},

{
  _id: "6647c916d5b0a90daa03fe2f",
  name: "Hideo Kojima",
},

{
  _id: "6647c929d5b0a90daa03fe31",
  name: "Sid Meier",
},
{
  _id: "668438f5e1a310a1e8086ffa",
  name: "Hernán Baravalle",
},
 ];
 await Developer.create(developers);
 console.log("desarrolladores creados exitocisimamente bien");
}

export default seedDeveloper;