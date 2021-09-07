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
//* arr_names.map ( item => s_Fs[item].module = Func_examp.module );

// ^^^^^^^^^^^^^^^^^^^^^^^^^^

