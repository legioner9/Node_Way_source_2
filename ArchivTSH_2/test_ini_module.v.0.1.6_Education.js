const { arht } = require ( 'st_ini_arht' );

const anls = require ( 'st_ini_catFs' ).anlsFs_1;
arht.before ( anls, module );

const funcExamp = require ( 'E:\\Node_projects\\Node_Way\\Jobs\\CataloguerFs\\CreateCatalog\\AFP5_0.1_ctlg_1_to_2.v.0.1.6\\index.js' );
arht.before ( funcExamp, module );

// MODE for behavior
// funcExamp.mode.log = true;
// funcExamp.mode.deb = true;
// funcExamp.mode.debLog = true;
// funcExamp.mode.logFs = true;
// funcExamp.mode.stack = true;

anls.preset = { if_basename: false };

const res = anls ( 'Education' );

// anlsFs_1.mode.deb = true;
funcExamp ( res, [ '#','@' ] );

console.log ( '\n\nThe END __________________________ process.exit ( 0 )\n\n' );
process.exit ( 0 );
