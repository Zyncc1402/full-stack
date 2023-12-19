import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required"],
    lowercase: true,
  },
  name: {
    type: String,
    unique: [true, "Name already exists!"],
    required: [true, "Name is required"],
    lowercase: true,
  },
  image: {
    type: String,
  },
  cart: {
    short_name: String,
    price: String,
    image: String,
  },
});

const User = models.User || model("User", userSchema);

export default User;