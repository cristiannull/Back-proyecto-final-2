import express from "express";
import userRoutes from "./routes/userRoutes.js";
import rolRoutes from "./routes/rolRoustes.js";
import videogameRoutes from "./routes/videoGameRoutes.js";
import gameModeRoutes from "./routes/gameModeRoutes.js"
import developerRoutes from "./routes/developerRoutes.js";
import shoopRoutes from "./routes/shoopRoutes.js";
import genderRoutes from "./routes/genderRoutes.js";
import pegiRoutes from "./routes/pegiRoutes.js";
import themeRoutes from "./routes/themeRoutes.js";
import paymentMethodRoutes from "./routes/paymentMethodRoutes.js";
import authRoutes from "./routes/userLoginRoutes.js";
import typeOfferRoutes from "./routes/typeOfferRoutes.js"
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", userRoutes);
app.use("/", rolRoutes);
app.use("/", videogameRoutes);
app.use("/", gameModeRoutes);
app.use("/", developerRoutes);
app.use("/", shoopRoutes);
app.use("/", genderRoutes);
app.use("/", pegiRoutes);
app.use("/", themeRoutes);
app.use("/", paymentMethodRoutes);
app.use("/", authRoutes);
app.use("/", typeOfferRoutes)
app.listen(3000, () => {
  console.log("el server esta listo port:3000");
});
