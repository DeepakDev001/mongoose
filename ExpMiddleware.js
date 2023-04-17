const express = require('express');
const app = express();

const reqFilter = ((req, resp, next) => {
    if (!req.query.age) {
        resp.send("please provide the age");
    }
    else if (req.query.age < 18) {
        resp.send("you are can't access this page");

    }
    else {
        next();
    }

})
app.use(reqFilter)

app.get('', (req, resp) => {
    resp.send("Welcome, To the home page");
});
app.get('/user', (req, resp) => {
    resp.send("welcome, you are login the User Page");
});
app.listen(3000);