const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Please Enter the name of the Product"],
        trim: true,
        maxLength : [20, "Product name can not exceed 20 characters"],
    },
    price:{
        type: Number,
        required : [true, "Please add a price for the Product"],
        maxLength : [8, "Price can not exceed 8 characters"],
    },
    images :[
        {
            public_id :{
                type:String,
                required:true,
            },
            url :{
                type:String,
                required:true,
            }
        }
    ],
    category:{
        type:String,
        required: [true,"please add a category of the Product"],
    }
})

module.exports = mongoose.model("Product", productSchema);