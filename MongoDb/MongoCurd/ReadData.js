const ConnectDb = require('..Mongodb')

const main = async () => {
    let data = await ConnectDb();
    let getData = await data.find({}).toArray();
    console.log(getData);
}
main();