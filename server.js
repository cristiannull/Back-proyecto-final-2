import express from "express";
import userRoutes from "./routes/userRoutes.js";
import rolRoutes from "./routes/rolRoustes.js";
import videogameRoutes from "./routes/videoGameRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js"
import developerRoutes from "./routes/developerRoutes.js"
const app = express();

app.use(express.json());

app.use("/", userRoutes);
app.use("/", rolRoutes);
app.use("/", videogameRoutes);
app.use("/", categoryRoutes);
app.use("/", developerRoutes);

app.listen(3000, () => {
  console.log("el server esta listo port:3000");
});
