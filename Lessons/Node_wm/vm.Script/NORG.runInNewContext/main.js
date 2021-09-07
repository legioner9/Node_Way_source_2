'use strict';

const vm = require ( 'vm' );

const context_0 = {
    module: {},
    animal: 'cat',
    counter: 0,
};
const context_1 = {
    module: {},
    animal: 'dog',
    counter: 1,
};

debugger

const script = new vm.Script ( ` 
debugger
animal += '_is';
counter += 20
` );

script.runInNewContext ( context_0 );
script.runInNewContext ( context_1 );

console.log ( context );

