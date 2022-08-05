const express = require("express");

const {
    createProduct, 
    getSingleProduct, 
    } = require("../controller/ProductController");

const router = express.Router();

router
    .route("/product/new")
    .post(createProduct);

router
    .route("/product/:id")
    .get(getSingleProduct);

module.exports = router;