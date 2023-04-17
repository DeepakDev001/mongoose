
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url);
const database = 'e-com'

async function getData() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response)
}
getData();

// const mongoose = require("mongoose");

// function connectToDB () {
//     mongoose.connect(`mongodb://localhost:27017/e-com`)
//     .then(res => {
//         console.log("Database connected successfully")
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

// connectToDB()