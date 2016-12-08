
//  Node.js  - Making a server

let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Working on 3000');
