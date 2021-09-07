const WS = require ( 'ws' );

const wss = new WS.Server ( { port: 8080 } );
debugger

wss.on('open', ()=>{
    wss.send('OPEN wss)))')
})
