const EventEmitter = require ( 'events' );

const Ini_deep = require ( 'st_ini_deep1' );

const { l_log, l_deb, l_log_deb, l_fsLog, dirDeepOptoins } = Ini_deep;

// l_fsLog ( dev, 'String\n' , __dirname,[ 'fsLog_1', 'log_1.md']);

// const L_log = (dev, ... args) => {
//     if ( dev.log ) console.log(... args);
// };
//
// const L_log_deb = ( dev, ...args ) => {
//     if ( dev.log ) console.log ( ...args );
//     if ( dev.deb ) debugger;
// };
//
// const L_deb = ( dev ) => {
//     if ( dev.deb ) debugger;
// };

const ModuleFunc = ( x, opt = false ) => {

    // define Development MODE
    const MODE = ModuleFunc.mode;

    // define EVENT
    const EVENT = ModuleFunc.event;

    // define MODULE
    const MODULE = ModuleFunc.module;

    // define PRESET
    const PRESET = ModuleFunc.preset;

    // InnerState reports
    EVENT.emit ( 'start ModuleFunc', d = '' );
    EVENT.emit ( 'point ModuleFunc', d = '' );
    EVENT.emit ( 'end ModuleFunc', d = '' );

    // subscription to initiate
    EVENT.on ( 'init ModuleFunc', ( d = '' ) => {

        dirDeepOptoins ( MODE );
    } );
    EVENT.on ( 'case_1', ( ...args ) => {} );

    // quite needful this:
    if ( MODE.stack ) console.log ( `ModuleFunc is RUN` );
    l_log ( MODE, 'that stdout' ); // if stdout
    l_deb ( MODE ); // if debug
    l_log_deb ( MODE, 'that stdout and debug' ); // if stdout and debug
    //  __dirname, [ 'fsLog_1', 'log_1.md' ] is DEFAULT value
    l_fsLog ( MODE, 'Info for log file\n', MODULE.path, [ 'fsLog_1', 'log_1.md' ] );

    // Body of Func
    console.log ( ' RUN ^func_v_1_test_1 and DO SOMETHING __------^^^^^' );

};

ModuleFunc.help = `ModuleFunc = () => {}`;

ModuleFunc.call = () => console.log ( ModuleFunc );

ModuleFunc.mode = { deb: false, log: false, logFs: false, stack: false };

ModuleFunc.event = new EventEmitter;

ModuleFunc.module = {};

ModuleFunc.preset = {};

module.exports = ModuleFunc;
