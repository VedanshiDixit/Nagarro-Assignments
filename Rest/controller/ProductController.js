const Product = require("../models/ProductModel");
const ErrorHandler = require("../middleware/ErrorHandler");

// create Product
exports.createProduct = async (req,res,next) =>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    });
};

// single product details
exports.getSingleProduct = async(req,res,next) =>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product is not found with this id", 404));
    }
    res.status(200).json({
        success:true,
        product
    });
};
