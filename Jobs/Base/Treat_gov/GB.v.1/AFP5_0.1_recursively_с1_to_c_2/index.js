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
    // console.log ( 'Run Func_examp------------' );

    //--------------------------------------------------------------
    // PRE Function
    // inj_log ( 'work inj_log' );
    // inj_deb ();
    // inj_log_deb ( 'work inj_log_deb' );
    // inj_fsLog ( 'work inj_fsLog once' );
    // inj_fsLog ( 'work inj_fsLog twice' );
    // inj_fsLogErr ( 'work inj_fsLogErr once' );
    // inj_fsLogErr ( 'work inj_fsLogErr twice' );
    // inj_console_obj ( { a: 'inj_console_obj -------a------' } );
    // inj_stack ( 'work inj_stack' );
    // inj_send ( 'send_from_func', 'content to send_from_func' );
    // inj_listen ( 'send_to_func', d => console.log ( ' send_to_func = ', d ) );
    // inj_listen_ce ( 'send_to_func_ce', d => console.log ( ' send_to_func_ce = ', d ) );

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

    const path_root = 'E:\\Node_projects\\_src\\базыГов\\data-20200902T080815-structure001-20151020T000000.json.c_1';
    const path_root_compr = path_root + '.c_2';
    s_Fs.s_mkdirSync ( path_root_compr );
    const dir_list = s_Fs.s_readdirSync ( path_root );

// init model

    const path_file_1 = Path.join ( path_root, dir_list[0] );
    const r_file = s_Fs.s_readFileSync ( path_file_1, 'utf-8' );
    const init_obj = JSON.parse ( r_file );

    //! ARCHIVE identifying patterns in structure every item

    const compress_json = i => {

        let compare_arr = [];
        const res_obj = {};

        const path_file_1 = Path.join ( path_root, dir_list[i] );
        const r_file = s_Fs.s_readFileSync ( path_file_1, 'utf-8' );
        const init_obj = JSON.parse ( r_file );

        // compare_arr[i] = [];
        // compare_arr[i][0] = init_obj.elements[2].elements;
        // compare_arr[i][1] = init_obj.elements[5].elements;
        // compare_arr[i][2] = init_obj.elements[6].elements;

        const arr_confonmity = [ 2, 5, 6, 7 ];
        // const arr_confonmity = [ 7 ];
        arr_confonmity.map ( otem => {
            // debugger
            // compare_arr[j] = init_obj.elements[item].elements;

            init_obj.elements[otem].elements.map ( item => {

                // res_obj[item.name] = item.elements[0].text
                if ( Array.isArray ( item.elements ) ) item.elements.map ( jtem => {
                    // debugger
                    if ( jtem.type === 'text' ) {
                        res_obj[item.name] = jtem.text;
                    }
                    else if ( jtem.type === 'element' ) {
                        // res_obj[item.name +jtem.name] = jtem.elements;
                        if ( Array.isArray ( jtem.elements ) ) jtem.elements.map ( ktem => {
                            // debugger
                            if ( ktem.type === 'text' ) {
                                res_obj[item.name + '_' + jtem.name] = ktem.text;
                            }
                            else if ( ktem.type === 'element' ) {
                                if ( Array.isArray ( ktem.elements ) ) ktem.elements.map ( ltem => {
                                    if ( ltem.type === 'text' ) {
                                        res_obj[item.name + '_' + jtem.name + '_' + ktem.name] = ltem.text;
                                    }
                                    else if ( ltem.type === 'element' ) {
                                        if ( Array.isArray ( ltem.elements ) ) ltem.elements.map ( mtem => {
                                            if ( mtem.type === 'text' ) {
                                                res_obj[item.name + '_' + jtem.name + '_' + ktem.name + '_' + ltem.name] = mtem.text;
                                            }
                                            else if ( mtem.type === 'element' ) {
                                                // debugger
                                                if ( Array.isArray ( mtem.elements ) ) mtem.elements.map ( ntem => {
                                                    if ( ntem.type === 'text' ) {
                                                        res_obj[item.name + '_' + jtem.name + '_' + ktem.name + '_' + ltem.name + '_' + mtem.name] = ntem.text;
                                                    }
                                                    else if ( ntem.type === 'element' ) {
                                                        debugger
                                                    }
                                                } );
                                            }
                                        } );
                                    }
                                } );
                            }
                        } );
                    }
                } );
            } );

        } );

        // DEFINE RECURSE FUNCTIONS ********************************

        const concat = ( a, b ) => a + '_' + b;

        const recu_fun = ( next, init_item, result ) => {
            // debugger
            const _next = concat ( next, init_item.name );
            if ( init_item.type === 'text' ) {
                result[next] = init_item.text;
                return;
            }

            else if ( init_item.type === 'element' ) {
                if ( Array.isArray ( init_item.elements ) ) init_item.elements.map ( second_item => {
                    // debugger
                    recu_fun ( _next, second_item, result );
                } );
            }

            else {
                debugger
            }

        };

        // END DEFINE RECURSE FUNCTIONS ********************************

        // RUN RECURSE AREA ++++++++++++++++++++++++++++
        const res_obj_rec = {};
        // debugger

        arr_confonmity.map ( otem => {
            // debugger
            init_obj.elements[otem].elements.map ( item => {
                // debugger
                if ( Array.isArray ( item.elements ) ) item.elements.map ( jtem => {
                    // debugger
                    recu_fun ( item.name, jtem, res_obj_rec );
                } );
            } );
        } );

        // END RUN RECURSE AREA ++++++++++++++++++++++++++++
        debugger
        const write_data = JSON.stringify ( res_obj );
        const write_data_rec = JSON.stringify ( res_obj_rec );

        console.assert(write_data !== write_data_rec, 'you defeated yourself')

        s_Fs.s_writeFileSync ( Path.join ( path_root_compr, dir_list[i] ), write_data );

    };
    // debugger
    compress_json ( 789 );
    debugger

    const path_to_n = Path.join ( Func_examp.module.path, 'n' );
    let n = s_Fs.s_readFileSync ( path_to_n ).trim ();

    for ( let j = n ; j < dir_list.length ; j++ ) {

        debugger
        compress_json ( j );
        s_Fs.s_writeFileSync ( path_to_n, j );
        console.log ( j );
    }

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
