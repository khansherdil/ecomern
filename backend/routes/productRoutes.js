const express = require("express");
const Product = require("../models/productModel");
const expressAsyncHandler = require("express-async-handler");

const router = express.Router();

//gebruik express async handler om errors te handlen bij middlewares
// @desc Fetch all products
// @route Fetch /api/products
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc Fetch one product
// @route Fetch /api/products/:id
router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found.");
    }
  })
);

module.exports = router;
