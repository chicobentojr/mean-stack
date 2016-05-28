const app = require('./config/express')();
const open = require('open');
const database = require('./config/database.js');

app.get('/', function(request, response){
  response.send('<h1>Hello World! </h1>');
})

database('mongodb://localhost/mean-stack');

app.listen('3000', function(){
  console.log('server running..');
  console.log('browser opening..');
  open('http://localhost:3000/');
})
