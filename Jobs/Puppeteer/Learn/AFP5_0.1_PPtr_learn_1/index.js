const Ex = require ( 'st_ex1' );
const Arht = require ( 'st_arht' );

const arht_fm = Arht.SetArchetype.FunctionARHT.AtOut_fm;
// const ModuleFunc = Ex.ModuleFunc
// ModuleFunc.mode = { deb: false, log: false, debLog: false, logFs: false, stack: false};

const Func_examp = () => {

    // BOUNDEN CALL define inner Env
    const Env = arht_fm.at ( Func_examp );

    // inner INSTRUMENTS fore construction:

    // Func_examp.l_log ( Env.MODE, 'work Func_examp.l_log' );
    const inj_log = string => {
        Func_examp.l_log ( Env.MODE, string );
    };

    // Func_examp.l_deb ( Env.MODE );
    const inj_deb = () => {
        Func_examp.l_deb ( Env.MODE );
    };

    // Func_examp.l_log_deb ( Env.MODE, 'work Func_examp.l_log_deb and far debug' );
    const inj_log_deb = string => {
        Func_examp.l_log_deb ( Env.MODE, string );
    };

    // if {module run} === {module define}
    // Func_examp.l_fsLog ( Env.MODE, 'work Func_examp.l_fsLog', Env.MODULE.path );

    // if {module run} !== {module define}
    const inj_fsLog = string => {
        Func_examp.l_fsLog ( Env.MODE, string, Func_examp.module.path );
    };
    // if {module run} === {module define}
    // Func_examp.l_fsLogErr ( Env.MODE, 'work Func_examp.l_fsLog', Env.MODULE.path );

    // if {module run} !== {module define}
    const inj_fsLogErr = string => {
        Func_examp.l_fsLogErr ( Env.MODE, string, Func_examp.module.path );
    };

    // Func_examp.dirDeepOptions ( { a: 'aa' } );
    const inj_console_obj = obj => {
        Func_examp.dirDeepOptions ( obj );
    };

    // Func_examp.l_stack ( Env.MODE, 'work Func_examp.l_stack' );
    const inj_stack = string => {
        Func_examp.l_stack ( Env.MODE, string );
    };

    // internal event report (envelope_out to recipient signer 'boom_boom')
    // Func_examp.event.emit ( 'boom_boom', 'envelope_out to recipient signer \'boom_boom\')))' );
    const inj_send = ( event_name, data_to_send ) => {
        Func_examp.event.emit ( event_name, data_to_send );
    };

    // external event listener ( envelope from sender 'data to Func_examp')
    // Func_examp.event.on ( 'data to Func_examp', envelope_in => envelope_in );
    const inj_listen = ( event_name, cb_listener ) => {
        Func_examp.event.on ( event_name, cb_listener );
    };

    const inj_listen_ce = ( event_name_ce, cb_listener_ce ) => {
        Func_examp.event.once ( event_name_ce, cb_listener_ce );
    };

    const inj = {
        log: inj_log,
        deb: inj_deb,
        log_deb: inj_log_deb,
        fsLog: inj_fsLog,
        fsLogErr: inj_fsLogErr,
        console_obj: inj_console_obj,
        stack: inj_stack,
        send: inj_send,
        listen: inj_listen,
        listen_ce: inj_listen_ce,
    };

    // inj_log = string => {
    // inj_deb = () => {
    // inj_log_deb = string => {
    // inj_fsLog = string => {
    // inj_fsLogErr = string => {
    // inj_console_obj = obj => {
    // inj_stack = string => {
    // inj_send = ( event_name, data_to_send ) => {
    // inj_listen = (event_name , cb_listener) =>{
    // inj_listen_ce = (event_name_ce , cb_listener_ce) =>{

    // START BODY OF FUNCTION==========================================================
    console.log ( 'Run Func_examp------------' );

    //--------------------------------------------------------------
    // PRE Function
    inj_log ( 'work inj_log' );
    inj_deb ();
    inj_log_deb ( 'work inj_log_deb' );
    inj_fsLog ( 'work inj_fsLog once' );
    inj_fsLog ( 'work inj_fsLog twice' );
    inj_fsLogErr ( 'work inj_fsLogErr once' );
    inj_fsLogErr ( 'work inj_fsLogErr twice' );
    inj_console_obj ( { a: 'inj_console_obj -------a------' } );
    inj_stack ( 'work inj_stack' );
    inj_send ( 'send_from_func', 'content to send_from_func' );
    inj_listen ( 'send_to_func', d => console.log ( ' send_to_func = ', d ) );
    inj_listen_ce ( 'send_to_func_ce', d => console.log ( ' send_to_func_ce = ', d ) );

    //--------------------------------------------------------------
    // THIS Function

    // ^^^^^^^^^^^^^^^^^^^^^^^^^^
// HEADERS s_Fs:

    const Path = require ( 'path' );
    const s_Fs = require ( 'st_ini_fs' );
    const { arht } = require ( 'st_ini_arht' );

    const arr_names = Object.getOwnPropertyNames ( s_Fs );

// if {run module} === {define module}
//* arr_names.map ( item => arht.before ( s_Fs[item], module ) );

// if {run module} !== {define module}
// MODULE from stack {run module} Func_examp - NOT from this {define module}
// const Func_examp = () => {
//     arr_names.map ( item => s_Fs[item].module = Func_examp.module );
//     // do some with s_Fs
// }
    arr_names.map ( item => s_Fs[item].module = Func_examp.module );

// ^^^^^^^^^^^^^^^^^^^^^^^^^^

    const PPtr = require ( 'puppeteer' );

    async function getPic () {

        PPtr.launch ( { headless: false } ).then ( d => {
            debugger
            d.newPage ().then ( d1 => {
                debugger
                d1.goto ( 'https://mail.ru' ).then ( d11 => {
                    debugger
                } );
                // d1.screenshot ( Path.join ( Func_examp.module.path, 'scsh' ) ).then ( d12 => {
                //     debugger
                //     d.close ();
                //
                // } );
            } );
        } );

        // const browser = await puppeteer.launch();
        // const page = await browser.newPage();
        // await page.goto('https://google.com');
        // await page.screenshot({path: 'google.png'});
        //
        // await browser.close();

    }

    let scrape = async () => {
        const browser = await PPtr.launch ( { headless: false } );
        const page = await browser.newPage ();

        await page.goto ( 'http://books.toscrape.com/' );
        debugger

        await page.click ( '#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img' );
        await page.waitFor ( 1000 );

        const result = await page.evaluate ( function()  {
            // const _this = this
            debugger
            let title = document.querySelector ( 'h1' ).innerText;
            let price = document.querySelector ( '.price_color' ).innerText;

            return {
                this: this,
                title,
                price
            };

        } );

        // await browser.close ();
        return result;
    };

    scrape ().then ( ( value ) => {
        console.log ( value ); // ????????????????????!
    } );

    // getPic ();

    //--------------------------------------------------------------
    // END BODY OF FUNCTION==========================================================

};

// BOUNDEN CALL
arht_fm.prop ( Func_examp );
arht_fm.out ( Func_examp );

// // event report out (export from) Func_examp:
//
// Func_examp.event.once ( '_start', function ( ENV ) {
//     Func_examp.dirDeepOptions ( ENV );
// }, Func_examp );
//
// Func_examp.event.once ( '_innerState', function ( innerState ) {
//     Func_examp.dirDeepOptions ( innerState );
// }, Func_examp );
//
// // define report behaviour :
//
// Func_examp.mode.log = true;
// Func_examp.mode.deb = true;
// Func_examp.mode.debLog = true;
// Func_examp.mode.logFs = true;
//
// // BOUNDEN CALL define root_path
// arht_fm.before ( Func_examp, module );
//
// Func_examp ();
//
// // AFTER Func_examp () , s.t. 'externalState' not exists yet > event transport to (import to) Func_examp:
// Func_examp.event.emit ( '_externalState', '__blob' ); // exterState: "__blob"
//
// debugger

module.exports = Func_examp;
