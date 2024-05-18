import express from "express";
import userRoutes from "./routes/userRoutes.js";
import rolRoutes from "./routes/rolRoustes.js";
import videogameRoutes from "./routes/videoGameRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import developerRoutes from "./routes/developerRoutes.js";
import shoopRoutes from "./routes/shoopRoutes.js";
import genderRoutes from "./routes/genderRoutes.js";
import pegiRoutes from "./routes/pegiRoutes.js";
import themeRoutes from "./routes/themeRoutes.js";

const app = express();

app.use(express.json());

app.use("/", userRoutes);
app.use("/", rolRoutes);
app.use("/", videogameRoutes);
app.use("/", categoryRoutes);
app.use("/", developerRoutes);
app.use("/", shoopRoutes);
app.use("/", genderRoutes);
<<<<<<< HEAD
app.use("/", pegiRoutes);
app.use("/", themeRoutes);
=======

>>>>>>> 6fc0960aa4372414ea90d53945557640c974b10c
app.listen(3000, () => {
  console.log("el server esta listo port:3000");
});
