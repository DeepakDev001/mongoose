const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/e-com');
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
    }, {
        timestamps: true
    });
    const productsModel = mongoose.model('products', ProductSchema);
    let data = new productsModel({
        name: "Apple",
        price: 10000,
        category: "iPhone 12"
    });
    let result = await data.save();
    console.log(result)
}
// main();   /// save data in db function


//============ UpdateInDb_connection =========//

mongoose.connect('mongodb://127.0.0.1:27017/e-com');
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
}, {
    timestamps: true
});

const UpdateInDb = async () => {
    const products = mongoose.model('products', ProductSchema);
    let data = await products.updateOne(
        {
            name: "BlackBerry"
        },
        {
            $set: { price: 1222, category: "Maxpro" }
        }
    )
    console.log(data)
}
// UpdateInDb();    Update data in db function


const DeleteInDb = async () => {
    const products = mongoose.model('products', ProductSchema);
    let data = await products.deleteOne({

        name: "BlackBerry"
    })
    console.log(data)
}
// DeleteInDb();

const FindInDb = async () => {
    const products = mongoose.model('products', ProductSchema);
    let data = await products.find();
    console.log(data)
}
FindInDb();