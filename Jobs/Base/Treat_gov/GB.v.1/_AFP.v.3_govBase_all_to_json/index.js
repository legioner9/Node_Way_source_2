const Ex = require ( 'st_ex1' );
const Arht = require ( 'st_arht' );

const arht_fm = Arht.SetArchetype.FunctionARHT.AtOut_fm;
// const ModuleFunc = Ex.ModuleFunc
// ModuleFunc.mode = { deb: false, log: false, debLog: false, logFs: false, stack: false};

const Func_examp = () => {

    // BOUNDEN CALL define inner Env
    const Env = arht_fm.at ( Func_examp );

    // inner INSTRUMENTS fore construction:

    Func_examp.l_log ( Env.MODE, 'work Func_examp.l_log' );
    Func_examp.l_deb ( Env.MODE );
    Func_examp.l_log_deb ( Env.MODE, 'work Func_examp.l_log_deb and far debug' );
    Func_examp.l_fsLog ( Env.MODE, 'work Func_examp.l_fsLog', Env.MODULE.path );
    Func_examp.dirDeepOptions ( { a: 'aa' } );
    Func_examp.l_stack ( Env.MODE, 'work Func_examp.l_stack' );

    // internal event report (envelope_out to recipient signer 'boom_boom')
    Func_examp.event.emit ( 'boom_boom', 'envelope_out to recipient signer \'boom_boom\')))' );

    // external event listener ( envelope from sender 'data to Func_examp')
    Func_examp.event.on ( 'data to Func_examp', envelope_in => envelope_in );

    // BODY OF FUNCTION
    console.log ( 'Run Func_examp------------' );
    //--------------------------------------------------------------

    const Fs = require ( 'fs' ),
        Path = require ( 'path' ),
        convert = require ( 'xml-js' );
    // var result = convert.xml2json(xml, {compact: true, spaces: 4});

    const path_root = 'E:\\Node_projects\\_src\\базыГов\\data-20200902T080815-structure001-20151020T000000.xml';
    const dir_list = Fs.readdirSync ( path_root );

    const path_file_1 = Path.join ( path_root, dir_list[1] );
    const r_file = Fs.readFileSync ( path_file_1, 'utf-8' );
    const json_file = convert.xml2json ( r_file );

    const path_root_json = 'E:\\Node_projects\\_src\\базыГов\\data-20200902T080815-structure001-20151020T000000.json';
    try {
        if (!Fs.existsSync(dir)){
            Fs.mkdirSync(dir)
        }
    } catch (err) {
        console.error(err.message)
    }
    debugger
    //--------------------------------------------------------------

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
