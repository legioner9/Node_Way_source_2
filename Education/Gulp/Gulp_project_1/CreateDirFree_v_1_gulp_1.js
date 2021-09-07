const Ex = require ( 'st_ex1' );
const createTechDir_1_v_2 = require ( 'st_ini' ).createTechDir_1_v_2;

// createTechDir_1_v_2.mode = 'debug';
// const arr_creator = [ 'A', 'B', [ 'B', 'BA' ,'BB'] ];

const arr_creator =
    [ 'gulpfile.js',
        [ 'app',
            ['css',0],
            ['fonts',0],
            ['img',0],
            ['js',0],
            ['libs',0],
            ['sass',0],
        ],
        [ 'dist',0],
    ];

createTechDir_1_v_2 ( __dirname, arr_creator );
console.log ( 'arr_creator is : ', arr_creator, '\nprn::process.exit ( 0 )' );
process.exit ( 0 );




