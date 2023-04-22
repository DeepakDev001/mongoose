const express = require('express')
require('./cnfg');
const product = require('./Product')

const app = express();
app.use(express.json());

//======= post method to send the database ==========// 

app.post('/create', async (req, resp) => {
    let data = new product(req.body);
    let result = await data.save();
    console.log(result);
    resp.send(req.body);
})

//======= Get method to list all data under the database ==========// 

app.get('/list', async (req, resp) => {
    let data = await product.find();
    resp.send(data)

})

//======= Delete method to delete the records from database ==========// 

app.delete('/delete/:_id', async (req, resp) => {
    console.log(req.params)
    let data = await product.deleteOne(req.params);
    resp.send(data)
})
//======= pust method to use update the records under the  database ==========// 

app.put('/update/:_id', async (req, resp) => {
    let data = await product.updateOne(
        req.params, {
        $set: req.body
    }
    );
    resp.send(data);
    console.log(req.params)
})

app.listen(5000)