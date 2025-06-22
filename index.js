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
