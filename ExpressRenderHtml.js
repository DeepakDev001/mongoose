// Topics :- 

// 1)-->> How html tags.
// 2)- -->> show json data.
// 3)-->> link page.

const express = require('express');
const app = express();
app.get("", (req, resp) => {
    resp.send(`<h1>welcome to the home page</h1> 
    <a href="/about">Visit about page</a>
    ` );
});
app.get('/about', (req, resp) => {
    resp.send(`<input type="text" placeholder="enter the name"/>
    <a href="/">Visit home page</a>
    `);
});
app.listen(5000);