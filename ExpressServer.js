const express = require('express');
const app = express();
app.get('', (req, resp) => {
    resp.send("hello this is ur home page ");
});

app.get('/About', (req, resp) => {
    resp.send("hello this is your About page");
});
app.listen(4500);