let fs = require('fs');

let file = getLines(process.argv[2]);

function getLines(filePath) {
  fs.readFile(filePath, (error, data) => {
    console.log(data.toString().split('\n').length - 1);
  });
}
