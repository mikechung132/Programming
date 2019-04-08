// Tutorial 7 - Creating HTTP Server using HTTP Module

const http = require('http');
const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.write('Hello world from NodeJS.');
    res.end();
  }else{
    res.write('Using another domain.');
    res.end();
  }
});

server.listen('3000');
