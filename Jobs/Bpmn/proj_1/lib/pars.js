'use strict';

const fs = require ( 'fs' );
const Path = require ( 'path' );
const xml2json = require ( 'xml2json' );

module.exports = function ( path_to_xml ) {

    let xml;

    try {
        xml = fs.readFileSync ( path_to_xml, 'utf-8' );
    }
    catch (e) {
        console.log ( e.message );
    }

    const sobj_max = JSON.parse ( xml2json.toJson ( xml ) );
    return sobj_max;

};
