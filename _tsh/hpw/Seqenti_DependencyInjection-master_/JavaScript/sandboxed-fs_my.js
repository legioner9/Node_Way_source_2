const Fs = require ( 'fs' );
const Path = require ( 'path' );

const clone_Fs = {};

const wrapFunction = ( fn, path ) => {

    return ( ...args ) => {
        debugger
        const arr_path = args[0].split ( '/' );
        const wrap_path = Path.join ( path, arr_path[arr_path.length - 1] );
        args[0] = wrap_path;

        return fn ( ...args );
    };
};

const typeFunction = {
    fileFunctions: {
        names: [
            'readFile',
            'readFileSinc',
        ],
        wrapper: wrapFunction,
    },
    twoPathFunctions: {
        names: [
            'copyFile',
        ],
        wrapper: wrapFunction,
    }
};

// const clone_Fs = cloneInterface ( Fs );

// clone_Fs.readFile ( '../../src/README.md', 'utf-8', ( err, data ) => {
//     debugger
//     if ( err ) throw err;
//     console.log ( { data } );
// } );
clone_Fs.bind = path => {
    const wraped = Object.assign ( {}, Fs );
    for ( const typeName of Object.keys ( typeFunction ) ) {
        const type = typeFunction[typeName];
        for ( const name of type.names ) {
            const fn = Fs[name];
            if ( !fn ) continue;
            wraped[name] = type.wrapper ( fn, path );
        }

    }
    return wraped;
};

// const b_fs = clone_Fs.bind ( './applications/application1/' );
//
// b_fs.readFile ( '../../src/README.md', 'utf-8', ( err, data ) => {
//     if ( err ) throw err;
//     console.log ( { data } );
// } );

module.exports = clone_Fs;

