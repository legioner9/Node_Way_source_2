const pug = require ( 'pug' );

const result_1 = pug.compileFile ( 'exa_name.pug' )
// result_1: ƒ template(locals)

const result_2 = result_1 ( {
          name: 'Timothy'
      } );
// result_2: "<p>Timothy's Pug source code!</p>"

debugger