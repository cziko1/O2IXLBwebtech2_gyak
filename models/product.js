const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    name : {
      type : String,
      required : true
    },
    quality : {
      type : String,
      required : true
    },
    price : {
      type : Number,
      required : true
    },
    weight : {
      type : Number,
      required : true
    }
  },
  {
    collection: 'products'
  });


const Product = module.exports = mongoose.model("Product", productSchema, 'products');
