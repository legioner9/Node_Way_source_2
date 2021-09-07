const status = document.getElementById ( 'status' );
const messages = document.getElementById ( 'messages' );
const form = document.getElementById ( 'form' );
const input = document.getElementById ( 'input' );

const ws = new WebSocket ( 'ws://127.0.0.1:3000' );

form.addEventListener ( 'submit', event => {
    event.preventDefault ();
    debugger
    ws.send ( input.value );
    input.value = '';
} );

function setStatus ( value ) {
    status.innerHTML = value;
}

function printMessage ( value ) {
    const li = document.createElement ( 'li' );

    li.innerHTML = value;
    messages.appendChild ( li );
}

ws.onopen = () => {
    debugger
    setStatus ( 'ONLINE' );
};

ws.onclose = () => {
    debugger
    setStatus ( 'DISCONNECTED' );
};

ws.onmessage = ( response ) => {
    debugger
    console.log ( response );
    // response.currentTarget === ws is true
    printMessage ( response.data );
};
