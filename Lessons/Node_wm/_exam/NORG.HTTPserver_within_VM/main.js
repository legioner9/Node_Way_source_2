'use strict';
const vm = require ( 'vm' );

const code = `
const str = 'Hello Worldsq\\n';
debugger
(require) => {
  const http = require('http');
 debugger
  http.createServer((request, response) => {
  debugger
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(str);
  }).listen(8124);
const d = 'd'
  console.log('Server running at http://127.0.0.1:8124/');
}`;
debugger
const serv = vm.runInThisContext ( code );
serv ( require );
