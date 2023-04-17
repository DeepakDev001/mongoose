// Topics:-

// Make file.
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'Curd');
const filePath = `${dirPath}/deepak.text`;
fs.writeFileSync(filePath, "hello deepak ur first file will be created");

//read file.

fs.readFile(filePath, 'utf-8', (err, item) => {
    console(item)
})

//update file.

fs.appendFile(filePath, "and congratulation ur data will be append ", (err) => {
    if (!err) console.log("file is updated")
})

//Rename file.

fs.rename(filePath, `${dirPath}/deepakYadav.txt`, (err) => {
    if (!err) console.log('file name will be updated')
})
//Delete file.
