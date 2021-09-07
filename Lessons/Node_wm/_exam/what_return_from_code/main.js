'use strict';
const vm = require ( 'vm' );
debugger
const is = vm.runInThisContext ( `d => d+3;
const a = 25;
(a);
({a});
` );
console.log ( is ); // { a: 25 } - return last expr inside round brackets
