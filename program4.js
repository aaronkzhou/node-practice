let fs = require('fs');
let path = require('path');

const filePath = process.argv[2];
const fileExt = process.argv[3];

fs.readdir(filePath, (err, data) => {
  if (err) console.log(err);
  const list = data.filter(file => path.extname(file) === '.' + fileExt);
  list.forEach(item => {
    console.log(item);
  });
});
