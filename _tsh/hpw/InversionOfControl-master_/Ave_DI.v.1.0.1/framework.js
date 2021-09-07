'use strict';

const Fs = require ( 'fs' );
const Path = require ( 'path' );

const coniunctum = {
    console: 'global',
    fs: 'native',
    ncp: 'modules',
};

const createApi = arr => {

};

const arr_mod = Fs.readdirSync ( __dirname ).filter ( name => {
    const arr = name.split ( '.' );
    return arr[arr.length - 1] === 'mod';
} );

// зависимость = clientela

let obj_mod_depend = {};

const pars_mod_depend = ( item, index, issue ) => {
    debugger
    const obj_json = require ( Path.join ( __dirname, item, 'package_.json' ) );
    const path = Path.join ( __dirname, item, obj_json.main );
    const code = Fs.readFileSync ( path, 'utf-8' );
    obj_mod_depend = Object.defineProperties ( obj_mod_depend, {
        [item]: {
            value: {
                code,
                path,
                dependencies: obj_json.dependencies,
            },
            writable: false,
        },
    } );
};

arr_mod.forEach ( pars_mod_depend );

