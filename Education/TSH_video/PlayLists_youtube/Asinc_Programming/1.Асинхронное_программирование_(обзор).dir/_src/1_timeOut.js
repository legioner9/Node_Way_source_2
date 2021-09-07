'use strict';

const timer = function ( ms, cb ) {
    return setTimeout ( cb ( ms ), ms );
};

const t_cb = d => () => console.log ( d );

timer ( 5000, t_cb );

setTimeout ( () => {
    console.log ( 100 );
    setTimeout ( () => {
        console.log ( 200 );
        setTimeout ( () => {
            console.log ( 300 );
        }, 300 );
    }, 200 );
}, 100 );