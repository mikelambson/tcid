'use strict';

var config = {
    paths: {
        ts: [
            'src/assets/**/*.ts'
        ],
        rest: [
            'src/templates/**/*.html',
            'src/assets/systemjs.config.js',
            'src/**/*.py', 
            'src/assets/css/*.css'
        ]
    }
};

module.exports = function (gulp, plugins) {
    return function () {
        gulp.watch(config.paths.ts, ['transpile']);
        gulp.watch(config.paths.rest, ['copySrc']);
    }
};