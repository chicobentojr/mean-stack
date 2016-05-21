const app = require('./config/express')();
const open = require('open');

app.get('/', function(request, response){
  response.send('<h1>Hello World! </h1>');
})

app.listen('3000', function(){
  console.log('server running..');
  console.log('browser opening..');
  open('http://localhost:3000/');
})
