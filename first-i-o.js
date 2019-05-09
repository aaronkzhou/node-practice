let fs = require('fs');

let file = getLines(process.argv[2]);
function getLines(file) {
  return fs
    .readFileSync(file)
    .toString()
    .split('\n');
}
console.log(file.length - 1);
