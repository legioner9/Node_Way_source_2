const Event = require ( 'events' ).EventEmitter;

const event = new Event ();

const c = {
    write: console.log,
};

event.once ( 'a', function ( b ) {
    c.write ( b );
}, c );
debugger;
event.emit ( 'a', 'Body' );
