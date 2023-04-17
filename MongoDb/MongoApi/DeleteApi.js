const express = require('express');
const app = express();
const mongodb = require('mongodb');
const ConnectDb = require('../Mongodb');

app.use(express.json());

app.delete('/:id', async (req, resp) => {
    let data = await ConnectDb();
    let result = await data.deleteOne(
        { _id: new mongodb.ObjectId(req.params.id) }
    )
    console.log(req.params.id)
    resp.send(result)

})
app.listen(4000);