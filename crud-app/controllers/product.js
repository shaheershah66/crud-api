const { Product } = require("../models/product");

const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getProduct = async(req, res) => {
  try{
    const productId = req.params.id;
    const product = await Product.findById({_id: productId});
    res.status(200).json(product);
  }
  catch(error){
    res.status(400).json(error);
  }

};

const replaceProduct = async(req, res) => {
  try{
    const productId = req.params.id; //+ for type casting string to number
    const product = req.body;
    const newProduct = await Product.findOneAndReplace({_id: productId}, product, {new: true, runValidators: true});
    res.status(200).json(newProduct);
  }
  catch(error){
    res.status(400).json(error);
  }
};

const updateProduct = async(req, res) => {
  try{
    const productId = req.params.id; //+ for type casting string to number
    const updatedProductProperties = req.body;
    const newProduct = await Product.findOneAndUpdate({_id: productId}, updatedProductProperties, {new: true, runValidators: true});
    res.status(200).json(newProduct);
  }
  catch(error){
    res.status(400).json(error);
  }
};

const deleteProduct = async(req, res) => {
  try{
    const productId = req.params.id;
    const newProduct = await Product.findOneAndDelete({_id: productId});
    res.status(200).json(newProduct);
  }
  catch(error){
    res.status(400).json(error);
  }
};

module.exports = {createProduct, getAllProducts, getProduct, replaceProduct, updateProduct, deleteProduct}
