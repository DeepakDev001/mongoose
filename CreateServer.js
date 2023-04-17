// Topics 
// make basic serevr.
// function as parameter in node.
// Arrow function.
// get output on browser.

// Note ->> when make the server , firstly we need the core module like import 

const http = require('http')
http.createServer((req, resp) => {
    resp.write("<h1>Hello Deepak ur first server is running</h1>");
    resp.end();
}).listen(4500);

// Points:-

//http->> In the node js http its handle the request and respond.
// .createServer->> its takes the function as a parametter.

