var http = require('http');

http.createServer((req,res)=>{
    res.end("<h1>Node js is running  </h1>");
}).listen(8010);
