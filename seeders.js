import mongoose from "mongoose";
import seedVideogames from "./seeders/videogameSeeder.js";
import seedUsers from "./seeders/userSeeder.js";
import seedRol from "./seeders/roleSeeder.js";
import seedGameModes from "./seeders/gameModeSeeder.js";
import seedGenders from "./seeders/genderSeeder.js";
import seedTypeOffer from "./seeders/typeOfferSeeder.js";
import seedPegi from "./seeders/pegiSeeder.js";

const MONGODB_URI = "mongodb://localhost:27017/BaseDeDatosProyectoFinal";

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    await seedVideogames();
    await seedUsers();
    await seedRol();
    await seedGameModes();
    await seedGenders ();
    await seedTypeOffer();
    await seedPegi();

    console.log("Seeding complete");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedDatabase();
