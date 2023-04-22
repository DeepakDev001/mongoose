const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('products', ProductSchema);