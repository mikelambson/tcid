'use strict';

var ts = require('gulp-typescript');

module.exports = function (gulp, plugins) {
    return function () {
        var tsProject = ts.createProject('tsconfig.json', { typescript: require('typescript') });

        var tsResult = gulp.src([
            'node_modules/@types/jasmine/index.d.ts',
            'node_modules/@types/node/index.d.ts',
            'src/assets/**/*.ts'
        ]).pipe(tsProject());

        return tsResult.js
            .pipe(gulp.dest('dist/assets'));
    }
};
