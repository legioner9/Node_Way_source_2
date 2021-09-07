'use strict';

const lib1 = require('./module_examp.js');
const libPath = require.resolve('./module_examp.js');
console.dir({ libPath });
delete require.cache[libPath];
const lib2 = require('./module_examp.js');

if (lib1 === lib2) {
    console.log('Cache not reloaded');
} else {
    console.log('Cache reloaded'); // true std.out
}
