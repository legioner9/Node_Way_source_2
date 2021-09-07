'use strict';

const vm = require ( 'vm' );
let context = { x: 2 };
context.global = context;
const code = `debugger
x += 40;
const y = 800;`;
debugger
vm.createContext ( context );
vm.runInContext ( code, context );
debugger
console.log ( { context } );
