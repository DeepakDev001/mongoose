const express = require('express');
const app = express();
const ConnectDb = require('../Mongodb');

app.use(express.json());


app.post('/', async (req, resp) => {
    let data = await ConnectDb();
    let result = await data.insertOne(req.body);
    resp.send(result);
})

app.listen(5000);