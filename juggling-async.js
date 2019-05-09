const fetch = require('node-fetch');

fetch(process.argv[2])
  .then(res => res.text())
  .then(body => {
    console.log(body);
    fetch(process.argv[3])
      .then(res => res.text())
      .then(body => {
        console.log(body);
        fetch(process.argv[4])
          .then(res => res.text())
          .then(body => console.log(body));
      });
  });
