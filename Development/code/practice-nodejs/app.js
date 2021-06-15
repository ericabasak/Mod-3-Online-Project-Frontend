// create a web server with nodejs
// const http = require('http');
// const server = http.createServer((req, res) => {
//   console.log(module);
//   if(req.url === '/'){
//     res.write("hi you are on the correct url");
//     res.end();
//   } else {
//     res.write("using some other domain");
//     res.end();
//   }
// });
// server.listen('3000');



const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.write('Hello World');
    res.end();
  }
  if(req.url === '/api/adelyn') {
    res.write(JSON.stringify([1,2,3]))
  }
})
server.listen('3000');
console.log("this is adelyns page");

// node is used to run backend services - API
// API --> application programming interface
// node is good for HIGHLY SCALABLE, DATA-INTENSIVE, and REAL TIME APPS
// node is easy to get started, good for agile development and prototyping
// superfast
// node is a runtime environment for executing javascript code
// node is ASYNCHRONOUS, NON-BLOCKING CODE


// NODE MODULE SYSTEM
// OS
// FS
// HTTP
// EVENTS

// every file in node is considered a module
// modelues are the building blocks
//    
