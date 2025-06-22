import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import productRoute from "./routes/product.route.js";
import "dotenv/config";

const { MONGO_DB_PASSWORD, MONGO_DB_USER, MONGO_DB_NAME } = process.env;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/products", productRoute);

// Get all products
/* app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); */
// Get One product
/* app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); */

// Create a new product
/* app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log("Error creating product:", error);
    res.status(500).json({
      message: error.message,
    });
  }
}); */
// Update a new product
/* app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log("Error updating product:", error);
    res.status(500).json({
      message: error.message,
    });
  }
}); */
// Delete a product
/* app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error deleting product:", error);
    res.status(500).json({
      message: error.message,
    });
  }
}); */

mongoose
  .connect(
    `mongodb+srv://pimientaglez:${MONGO_DB_PASSWORD}@cluster0.3tk9jce.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000);
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
