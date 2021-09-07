'use strict';

const {src, dest, watch, series, parallel} = require('gulp');
const del = require('./gulp/tasks/clean');
debugger
const p_b = (callback)=> {
    // что-то делаем
    del('./build');
    callback();
}

exports.p_b = series(p_b)