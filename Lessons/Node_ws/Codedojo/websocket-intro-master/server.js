const { _require } = require ( 'st_require' );
const WS = _require ( 'ws' );

const wss = new WS.Server ( { port: 3000 } );
debugger
wss.on ( 'connection', ws => {
    ws.on ( 'message', message => {
        if ( message === 'exit' ) {
            ws.send ('exit with code 0');
            ws.close ( );
        }
        else {
            wss.clients.forEach ( client => {
                if ( client.readyState === WS.OPEN ) {
                    client.send ( message );
                }
            } );
        }

    } );
    debugger
    console.log('connect is ?')
    ws.send ( 'Connect is existing' );
} );
