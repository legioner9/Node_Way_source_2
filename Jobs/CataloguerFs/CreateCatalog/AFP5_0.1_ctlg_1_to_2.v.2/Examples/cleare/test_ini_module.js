const { arht } = require ( 'st_ini_arht' );

const anls = require ( 'st_ini_catFs' ).anlsFs_1;
arht.before ( anls, module );

const funcExamp = require ( '../../index' );
arht.before ( funcExamp, module );

// MODE for behavior
// funcExamp.mode.log = true;
// funcExamp.mode.deb = true;
// funcExamp.mode.debLog = true;
// funcExamp.mode.logFs = true;
// funcExamp.mode.stack = true;

anls.preset = { if_basename: false };



const res = anls ( 'DIR_root' );


// anlsFs_1.mode.deb = true;
funcExamp (res);

debugger
