const express = require('express');
const app = express();
const ConnectDb = require('../Mongodb');

app.use(express.json());

app.get('/', async (req, resp) => {
    let data = await ConnectDb();
    data = await data.find().toArray();
    resp.send(data)

})

app.post('/', async (req, resp) => {
    let data = await ConnectDb();
    let result = await data.insertOne(req.body);
    resp.send(result);
})

app.listen(5000)


// Q why pass the body in Get method?
// Answer-> No