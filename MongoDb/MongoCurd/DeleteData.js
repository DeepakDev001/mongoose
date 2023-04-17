// DELETE DATA IN MONGODB

//-->> Make new file for delete data
//-->> import mongoDb connection.
// -->> Delete single and multipal records.


const ConnectDb = require('../Mongodb');

const DeleteData = async () => {
    const db = await ConnectDb();
    const result =await db.deleteOne(
        { name: "Nokia 1100" }
    );
    console.log(result)

}
DeleteData();

const DeleteManyData = async () => {
    let db = await ConnectDb();
    const result = await db.deleteMany(
        { name: "iPhone" }
    );
    if (result.acknowledged) {
        console.log("all data will be deleted related to iPhone")
    }
}
DeleteManyData();


// Q -->> suppose you delete some date in ur database but they data are not present in ur database the how to find??

// A ->> { acknowledged: true, deletedCount: 0 }




