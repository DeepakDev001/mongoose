// Read Data from mongoDb
// -> Read data
//-> Make a file for db connection
//-> handle promise.

const { MongoClient } = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url);
const database = 'e-com'

async function ConnectDb() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
}

module.exports = ConnectDb;

// method 1 -> this is a old

// ConnectDb().then((resp) => {
//     console.log(resp.find({}).toArray()) /// here once again return Promise  now again handle the promise
//     resp.find({}).toArray().then((data) => {
//         console.log(data)
//     })

// })


// method 2 -> this is latest one


// const main = async () => {
//     let data = await ConnectDb();
//     data = await data.find({}).toArray();
//     console.log(data)  // here once again return promise now again handle promise
// }
// main();



// make the file for db connection

// fileName- ReadDb.js

