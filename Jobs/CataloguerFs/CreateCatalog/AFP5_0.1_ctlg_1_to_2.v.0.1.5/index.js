const Ex = require ( 'st_ex1' );
const Arht = require ( 'st_arht' );

const arht_fm = Arht.SetArchetype.FunctionARHT.AtOut_fm;
// const ModuleFunc = Ex.ModuleFunc
// ModuleFunc.mode = { deb: false, log: false, debLog: false, logFs: false, stack: false};

const Func_examp = obj_ctlg_1 => {

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
    const if_b = Env.PRESET.if_basename;
    console.log ( if_b );
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
    inj.deb ();

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

    // START INNER STANDARD FUNCTION BLOCK &&&&&&&&&&&&&&&&&&

    const create_cat = path => {
        const path_dir_file = Path.join ( path, 'dir.' + Path.basename ( path ) + '.md' );
        s_Fs.s_writeFileSync ( path_dir_file, '' );
    };

    const write_to_cat = ( path, data ) => {
        const path_cat_dir = Path.join ( path, 'cat.' + Path.basename ( path ) );
        const path_dir_file = Path.join ( path_cat_dir, 'dir.' + Path.basename ( path ) + '.md' );
        if ( !!data ) {
            s_Fs.s_mkdirSync ( path_cat_dir );
            s_Fs.s_writeFileSync ( path_dir_file, data );
        }
    };

    const add_from_file = ( data, add ) => {
        return data + `  - <a href = "${ add }">${ Path.basename ( add ) }</a>\n`;
    };

    const add_from_dir = ( data, add ) => {
        debugger
        let _data = '';
        const arr_add = add.split ( '\n' );
        arr_add.map ( item => {
            data = data + '  ' + item + '\n';
        } );
        return data;
    };

    const add_first = ( data, add ) => {
        const path_dir_file = Path.join ( add, 'dir.' + Path.basename ( add ) + '.md' );
        return data + `- <a href = "${ path_dir_file }">${ Path.basename ( add ) }</a>\n`;
    };

    const PATH_ROOT_CATALOG = Path.join ( obj_ctlg_1[0], 'div.' + Path.basename ( obj_ctlg_1[0] + '.md' ) );
    const PRE_TEXT = `<a href = "${ PATH_ROOT_CATALOG }">${ Path.basename ( obj_ctlg_1[0] ) }</a>\n\n`;

    const path_to_href = path => `<a href = "${ path }">${ Path.basename ( path ) }</a>`;

    const path_to_root_path = path => {

        const path_cat_dir = Path.join ( path, 'cat.' + Path.basename ( path ) );
        return Path.join ( path_cat_dir, 'dir.' + Path.basename ( path ) + '.md' );

    };
    const path_to_root_href = path => `<a href = "${ path_to_root_path ( path ) }">${ Path.basename ( path ) }</a>`;

    const extr_file = path => {
        const data = s_Fs.s_readFileSync ( path );
        return data.split ( '\n' ).filter ( item => item.match ( /^#/ ) );
    };

    const if_path = path => {
        const bool_dir = Path.basename ( path ).split ( '.' )[0] === 'dir';
        const bool_md = Path.extname ( path ) === '.md';
        if ( !bool_dir && bool_md ) {
            const bool_cat = s_Fs.s_readFileSync ( path ).match ( '#' );
            return !!bool_cat;
        }
        else {
            return false;
        }
    };

    const if_cat = path => {
        return Path.basename ( path ).split ( '.' )[0] !== 'cat';
    };

    // END   INNER STANDARD FUNCTION BLOCK &&&&&&&&&&&&&&&&&&

    const make_catalog = ( arr_init, previous_path ) => {

        let data_init = '';
        let data_return = '';
        let data_write = '';
        let trg_exist_file = 0;
        const arr_0 = arr_init[0];

        for ( let i = 1 ; i < arr_init.length ; i++ ) {
            const arr_i = arr_init[i];

            if ( Array.isArray ( arr_i ) ) {
                let from_dir;

                if ( if_cat ( arr_i[0] ) ) {
                    from_dir = make_catalog ( arr_i, arr_0 );

                    if ( from_dir ) {
                        from_dir.split ( '\n' ).map ( item => {
                            data_init += '    ' + item + '\n';
                        } );
                        // data = add_from_dir ( data, from_dir );
                    }
                }
            }
            else {

                if ( if_path ( arr_i ) ) {
                    const arr_content_of_file = extr_file ( arr_i );

                    data_init += '    - ' + path_to_href ( arr_i ) + '\n';
                    arr_content_of_file.map ( item => {
                        data_init += '        - *' + item + '\n';
                    } );
                    // data = add_from_file ( data, arr_init[i] );

                }

            }
        }
        if ( data_init ) data_write = '- ' + path_to_root_href ( arr_0 ) + '\n' + data_init;
        write_to_cat ( arr_0, data_write );

        data_return = data_write;
        return data_return;

    };

    // START COMMENT ****************************************
    // END   COMMENT ****************************************

    make_catalog ( obj_ctlg_1, obj_ctlg_1[0] );

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
