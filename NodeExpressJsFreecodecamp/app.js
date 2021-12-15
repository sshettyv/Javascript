const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url)
    res.write('Hello and welcome ');
    res.end('link not found');

})

server.listen(3001);