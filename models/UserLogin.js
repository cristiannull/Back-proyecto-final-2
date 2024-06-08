import bcrypt from "bcryptjs";
import mongoose from "../config/mongoose.config.js";

const userloginSchema = mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    methods: {
      async hashCompare(string) {
        return bcrypt.compare(string, this.password);
      },
    },
  }
);

userloginSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});

const Userlogin = mongoose.model("Userlogin", userloginSchema);

export default Userlogin;
