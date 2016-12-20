'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var sequence = require('run-sequence');

// modules in gulp_tasks
var gulpTasks = [
    'clean',
    'compressScripts',
    'copyLibs',
    'copySrc',
    'transpile',
    'watch'
];

// load all gulp_tasks
gulpTasks.forEach(function(task) {
    gulp.task(task, require('./gulp_tasks/' + task)(gulp, plugins));
});

var config = {
    paths: {
        dist: 'dist',
        ts: 'src/assets/**/*.ts',
        js: [
            './gulp-tasks/*.js',
            './*.js'
        ],
        html: [
            'src/**/*.html'
        ]
    }
};

gulp.task('local', function(cb) {
    sequence('clean',  [ 'copyLibs', 'copySrc' ], 'transpile', [ 'watch' ],cb);
});
