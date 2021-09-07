const Path = require ( 'path' );
const s_Fs = require ( 'st_ini_fs' );
const { arht } = require ( 'st_ini_arht' );
debugger
const arr_names = Object.getOwnPropertyNames ( s_Fs );
arr_names.map ( item => arht.before ( s_Fs[item], module ) );

const govBase_all_to_json = require ( '../../index' );

arht.before ( govBase_all_to_json ,module);
// MODE for behavior
// s_writeFileSync.mode.log = true;
// s_writeFileSync.mode.deb = true;
// s_writeFileSync.mode.debLog = true;
// govBase_all_to_json.mode.logFs = true;
// s_writeFileSync.mode.stack = true;
debugger
govBase_all_to_json ();

debugger
