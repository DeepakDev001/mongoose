//  INSERT DATA FROM MONGODB

//->> make a file for insert data
//->> import MongoDb connection
// ->> insert single and multiple Records

const ConnectDb = require('../Mongodb')

const insertData = async () => {
    const db = await ConnectDb();
    const result = db.insertOne(
        {
            name: "note 5",
            brand: "vivo",
            price: 320,
            category: "mobile"
        }
    );
    console.log(result)


    // in console return the promise but data will be inserted 
    //->> now we use the await in result section. after that we check acknowledged 

}
insertData();

const insertData1 = async () => {
    const db = await ConnectDb();
    const result = await db.insertOne(
        {
            name: "MacPro",
            brand: "Iphone",
            price: 1200,
            category: "tablate"
        }
    );
    if (result.acknowledged) {
        console.log("Your Data will be inserted ")
    }
}
insertData1();


//insert  multiple Records

const Data = require('./MutliPalData')
const insertData2 = async () => {
    const db = await ConnectDb();
    const result = db.insertMany(Data)
    if (result.acknowledged) {
        console.log("MultiPal_Data_inserted")
    }

}
insertData2();