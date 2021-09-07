'use strict';

const { src, dest, watch, series, parallel } = require ( 'gulp' );
const del = require ( 'del' );

const tN = ( callback ) => {
    // что-то делаем
    console.log ( 'Привет, Gulp!' );
    callback ();
};

const copy_css = () => {
    return src ( 'app/assets/css/**.css' )   // выбираем все css-файлы
        // что-то делаем
        .pipe ( dest ( 'dist/assets/css/' ) );   // и выгружаем
};

const clean_css_than = () => {
    return del ( './dist/assets/css/' ).then ( copy_css );
};

const clean_css = ( cb ) => {
    src ( './dist/assets/css/' )
        .pipe ( del )
        .pipe ( dest(''));

};

// const clean_css = async () => {
//     return del ( './dist/assets/css/' )
//         // .then ( () =>{});
// };

// src (sourse) - выбираем файлы для обработки;
// dest (destination) - место назначения.
// app/**/*.* - выбор всех файлов в папке app;
// app/js/**/*.js - выбор всех js файлов в папке js;
// app/**/*.{css,js} - все css и js файлы в папке app;
// app/{folder1,folder2}/**/*.{js,css} - все js и css-файлы в папках folder1 и folder2;
// ['app/**/*.css', 'app/**/*.js'] - получаем сначала все css, потом все js в папке app;
// ['app/**/*.*', '!app/**/*.js'] - все файлы в папке app, кроме js-файлов. (! - знак исключения).

exports.clco_css_ser = series ( clean_css, copy_css ); // well done but((
exports.clco_css_par = parallel ( clean_css, copy_css ); // some with error

