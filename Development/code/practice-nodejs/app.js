// create a web server with nodejs
const http = require('http');
const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.write("hi you are on the correct url");
    res.end();
  } else {
    res.write("using some other domain");
    res.end();
  }
});
server.listen('3000');