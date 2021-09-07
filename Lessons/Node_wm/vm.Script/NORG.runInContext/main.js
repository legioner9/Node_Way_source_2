'use strict';

const vm = require ( 'vm' );

const context_0 = {
    module: {},
    animal: 'cat',
    counter: 0,
};

debugger
const context = vm.createContext ( context_0 );
const if_ = context === context_0;
const script = new vm.Script ( ` 
debugger
counter +=1;
const name = 'kitty';
name2 = 'kitty_';
var name3 = 'kitty__';
module.exports = {name};
const dTh = globalThis;
` );

script.runInContext ( context );

console.log ( context );

