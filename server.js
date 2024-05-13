import express from "express";
import userRoutes from "./routes/userRoutes.js";
import rolRoutes from "./routes/rolRoustes.js";
import videogameRoutes from "./routes/videoGameRoutes.js";
import shoopRoutes from "./routes/shoopRoutes.js"
const app = express();

app.use(express.json());

app.use("/", userRoutes);
app.use("/", rolRoutes);
app.use("/", videogameRoutes);
app.use("/", shoopRoutes)

app.listen(3000, () => {
  console.log("el server esta listo port:3000");
});
