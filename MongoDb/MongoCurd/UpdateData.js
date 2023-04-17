// UPDATE DATA IN MONGODB

//-->> make new file for update data.
//-->> import MongoDb connection.
//-->> update single and Multipal records.

const ConnectDb = require('../Mongodb')

const updateData = async () => {
    const db = await ConnectDb();
    const result = await db.updateOne(
        { name: "Z1 pro" }, {
        $set: { name: "pro Z1", price: 00000 }
    }
    );
    console.log(result)
}
updateData();

// -->> updateOne => it's have two condition first state check the condition and second state will be update the state the data.

// Q suppose that we have same name of record 4 if we run the UpdateOne which data will be update 1st and last ? 

// Answer -->> always first data will be update .


//-->> updateMany command all same data will be update in  same tym and we pass the multipal condition at a time