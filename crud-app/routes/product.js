const express = require("express");
const { createProduct, getAllProducts, getProduct, replaceProduct, updateProduct, deleteProduct} = require("../controllers/product");
const router = express.Router();

router.post("/", createProduct)
.get("/", getAllProducts)
.get("/:id", getProduct)
.put("/:id", replaceProduct)
.patch("/:id", updateProduct)
.delete("/:id", deleteProduct);

exports.router = router;
