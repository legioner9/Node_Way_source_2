'use strict';

const { src, dest, watch, series, parallel } = require ( 'gulp' );
const _del = require ( 'del' );

debugger
const src_d = src ( 'dist/*' );
src_d.on ( 'data', d => {
    debugger
    // d is the File
} );

const copy = function () {
    return src ( 'dist/*' )
        .pipe ( dest ( 'app' ) );
};

exports.copy_2 = function () {
    return src ( 'a' )
        .pipe ( dest ( 'app' ) );
};

const del = async function ( cb ) {
    // _del.sync ( ['app'] );
     await _del('app')
    cb ();
};

exports.del = del;
exports.copy = copy;

exports.ser = series ( del, copy );
// copy ();

debugger

