const Ex = require ( 'st_ex1' );
const createTechDir_1_v_2 = require ( 'st_ini' ).createTechDir_1_v_2;

// createTechDir_1_v_2.mode = 'debug';
// const arr_creator = [ 'A', 'B', [ 'B', 'BA' ,'BB'] ];

const arr_creator =
    [ 'gulpfile.js',
        [ 'build', 0 ],
        [ 'src',
            [ 'img', 0 ],
            [ 'js',
                'mane.js', ],
            [ 'local_modules',
                [ 'jquery',
                    [ 'dist',
                        'jquery.min.js' ] ] ],
            [ 'pages',
                'about.pug',
                'index.pug',
                [ 'common',
                    'footer.pug',
                    'header.pug',
                    'layout.pug',
                ],
                [ 'includes',
                    'about.pug',
                    'index.pug',
                    [ 'about',
                        'company-info.pug',
                    ],
                    [ 'index',
                        'banner.pug',
                    ],
                ],
            ],

            [ 'stiles',
                'style.scss',
                [ 'common',
                    'global.scss' ],
                [ 'mixins',
                    'media.scss' ],
                [ 'utils',
                    'fonts.scss',
                    'variables.scss', ], ], ],
        [ 'gulp',
            'config.js',
            [ 'tasks',
                'clean.js' ] ],
        [ 'includes',
            'index.pug',
            'head.pug',
            'foot.pug', ],
    ];

createTechDir_1_v_2 ( __dirname, arr_creator );
console.log ( 'arr_creator is : ', arr_creator, '\nprn::process.exit ( 0 )' );
process.exit ( 0 );




