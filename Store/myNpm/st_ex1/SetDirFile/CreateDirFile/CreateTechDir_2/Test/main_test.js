const Ex = require ( 'st_ex1' );
const createTechDir_2 = require ( 'st_ini' ).createTechDir_2;

createTechDir_2.mode = 'debug';
// const arr_creator = [ 'A', 'B', [ 'B', 'BA' ,'BB'] ];
const arr_creator = [ 'A', 'B', [ 'B0', 'BA' ,'BB',['BB0','BBA','BBB'],['empty_dir']] ];
createTechDir_2 ( __dirname, arr_creator );

// const _src = [ '_src', 0 ];
//
// const Common_this = [ 'Common_this', 'Common_this.md','ReadMe.md',
//     _src ];
// const Docs_this = [ 'Docs_this', 'Docs_this.md','ReadMe.md',
//     _src ];
// const www_this = [ 'www_this', 'www_this.md','ReadMe.md',
//     _src ];
//
// const Live_learn = [ 'Live_learn', 'Live_learn.md', 'ReadMe.md',
//     Common_this,
//     Docs_this,
//     www_this ];
//
// const the_part_of_this = [ 'Point_learn', 'Point_learn.md', 'ReadMe.md',
//     Common_this,
//     Docs_this,
//     www_this ];
//
// const Point_learn = [ 'Point_learn', 'Point_learn.md','ReadMe.md',
//     the_part_of_this ];
//
// const Intro = [ 'Intro', 'Intro.md', 'ReadMe.md',
//     Common_this,
//     Docs_this,
//     www_this ];
//
// const Use_this = [ 'Use_this', 'Use_this.md','ReadMe.md',
//     [ 'First_steps', 'First_steps.md','ReadMe.md', _src ],
//     [ 'Hints', 'Hints.md','ReadMe.md', _src ] ];
//
// const Workout_this = [ 'Workout_this', 'Workout_this.md', _src ];


