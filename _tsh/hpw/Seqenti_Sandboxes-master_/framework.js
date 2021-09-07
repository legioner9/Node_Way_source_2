const { _require } = require ( 'st_require' );
const _node = _require ( '_node' );

const PRSING_TIMEOUT = 1000;
const EXECUTION_TIMEOUT = 5000;

const { vm, fs } = _node;

const __node = Object.assign ( {}, _node );
delete __node.fs;

const context = ( { module: {} } );

// context.global = context;
const sandbox = vm.createContext ( context );

fs.readFile ( './application.js', ( err, data ) => {

    if ( err ) throw err;

    const code = `'use strict';
    (api =>{ ${ data }})`;

    let script;
    try {
        script = new vm.Script ( code, { timeout: PRSING_TIMEOUT } );
    }
    catch (e) {
        console.log ( e );
        process.exit ( 1 );
    }

    try {
        debugger
        const f_vm = script.runInNewContext ( sandbox, { timeout: EXECUTION_TIMEOUT } );
        f_vm ( __node );
        debugger
        console.dir ( { sandbox }, { depth: 1 } );

    }
    catch (e) {
        console.log ( e );
        process.exit ( 1 );
    }

} );

