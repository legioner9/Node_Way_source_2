const Arht = require ( 'st_ini_arht' );
const atOut_1 = Arht.atOut_1;
debugger
const fn = () => {
    console.log ( 'RUN main tread' );
};
atOut_1.prop ( fn );
atOut_1.out ( fn );
fn.mode.logFs = true;

debugger
fn ();
