const express = require('express');
const app = express();
const ConnectDb = require('../Mongodb');

app.use(express.json());

// app.put("/", async (req, resp) => {
//     let data = await ConnectDb();
//     let result = data.updateOne(
//         { name: req.body.name }, { $set: req.body }
//     )
//     resp.send({ result})

// })
// app.listen(3000);


/// Put Data with the help of param

app.put('/:name', async (req, resp) => {
    let data = await ConnectDb();
    let result = data.updateOne(
        { name: req.params.name }, { $set: req.body }
    )
    resp.send({result})
})
app.listen(3000);