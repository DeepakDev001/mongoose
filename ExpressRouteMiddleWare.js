const express = require('express');
const app = express();
const reqFilter = ((req, resp, next) => {
    if (!req.query.age) {
        resp.send("please providwe the age")
    }
    else if (req.query.age <= 18) {
        resp.send("You can not access the page");
    }
    else {
        next()
    }
})
app.get("", (req, resp) => {
    resp.send("welcome,the Route MiddleWare");
});
app.get("/about", reqFilter, (req, resp) => {
    resp.send("welcome,the about section");
});
app.listen(7000);