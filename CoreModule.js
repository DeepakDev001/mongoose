// Topics 
// ->> Core Modules? - In the core module we can say that fs , buffer, HTTP etc.
// ->> global Modules? - In the global module not need to import. eg-> console.log, filename,dirname etc

// ->> global example - 
console.log(__dirname);
//->> (__dirname)-> it's tells the ur dirname
console.log(__filename);
//->> (__dirname)-> it's tells the ur filename

// ->> Non-global example
const fs = require('fs');
fs.writeFileSync("hello word.txt","hello deepak this is ur first file ")

// Note -> this fs example is a non global modules becase they are not by default installed in the enviroments
// ->> under the writeFileSync "hello word.txt" -> it is a file name and "hello deepak this is ur first file " -> it is a content of file name



