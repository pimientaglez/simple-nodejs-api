import Product from "../models/product.model.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getSingleProduct = async (req, res) => {
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
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log("Error creating product:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
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
};

const deleteProduct = async (req, res) => {
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
};

export {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
