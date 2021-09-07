'use strict';

const vm = require ( 'vm' );

// const d = 'data';
global.d_ = 'data_'
debugger

const script = new vm.Script ( ` 
debugger
// d += '_is';
d_ += '_is_';
` );

script.runInThisContext();
debugger

