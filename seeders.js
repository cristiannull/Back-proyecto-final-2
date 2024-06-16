import mongoose from "mongoose";
import seedVideogames from "./seeders/videogameSeeder.js";
import seedUsers from "./seeders/userSeeder.js";
import seedRol from "./seeders/roleSeeder.js";

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

    console.log("Seeding complete");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedDatabase();
