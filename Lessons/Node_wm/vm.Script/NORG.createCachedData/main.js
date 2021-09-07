'use strict';

const vm = require ( 'vm' );

const script = new vm.Script ( `
function add(a, b) {
  return a + b;
}
debugger
const x = add(1, 2);
` );
debugger
const cacheWithoutX = script.createCachedData ();

script.runInThisContext ();

const cacheWithX = script.createCachedData ();

