import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  id: {
    type: Number,
    unique: [true, "ID already exists!"],
    required: [true, "ID is required"],
  },
  short_name: {
    type: String,
    required: [true, "Name is required"],
  },
  full_name: {
    type: String,
    required: [true, "Name is required"],
  },
  price: {
    type: String,
    required: [true, "Price is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
});

const Products = models.Product || model("Product", productSchema);

export default Products;