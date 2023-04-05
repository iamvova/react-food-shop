const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        categories: {type: String, required: true},
        img: {type: String, required: true},
        title: {type:String, required: true},
        desc: {type: String, required: true},
        aditionDesc: {type: String, required: true},
        priceCross: {type: Number},
        price: {type: Number, required: true},
        stars:{type: Number, required: true}
    }
)

module.exports = ProductSchema