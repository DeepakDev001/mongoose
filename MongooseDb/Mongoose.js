const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/e-com');
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number,
        category: String


    });
    const productsModel = mongoose.model('products', ProductSchema);
    let data = new productsModel({ name: "m10", price: 2000, category: "iphone" });
    let result = await data.save();
    console.log(result)
}
main();