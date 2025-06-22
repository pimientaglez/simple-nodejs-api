import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter a product quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please enter a product price"],
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
