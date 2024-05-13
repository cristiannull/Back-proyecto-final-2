import express from "express";
import userRoutes from "./routes/userRoutes.js";
import rolRoutes from "./routes/rolRoustes.js";
import videogameRoutes from "./routes/videoGameRoutes.js";
<<<<<<< HEAD
import categoryRoutes from "./routes/categoryRoutes.js"
import developerRoutes from "./routes/developerRoutes.js"
=======
import shoopRoutes from "./routes/shoopRoutes.js"
>>>>>>> 69c92ee406dd0d9585233512212c496ed568c91b
const app = express();

app.use(express.json());

app.use("/", userRoutes);
app.use("/", rolRoutes);
app.use("/", videogameRoutes);
<<<<<<< HEAD
app.use("/", categoryRoutes);
app.use("/", developerRoutes);
=======
app.use("/", shoopRoutes)
>>>>>>> 69c92ee406dd0d9585233512212c496ed568c91b

app.listen(3000, () => {
  console.log("el server esta listo port:3000");
});
