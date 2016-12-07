'use strict';

var merge = require('merge-stream');
var symlink = require('gulp-sym')

module.exports = function (gulp, plugins) {
    return function () {
        var config = {
            src: {
                html: 'src/templates/**/*.html',
                py: 'src/**/*.py',
                css: 'src/assets/css/**/*.css',
                ico: 'src/assets/**/*.ico',
            },
            target: {
                html: 'dist/templates',
                py: 'dist',
                css: 'dist/assets/css',
                ico: 'dist/assets',
            }
        }

        var html = gulp.src(config.src.html)
            .pipe(gulp.dest(config.target.html));

        var py = gulp.src(config.src.py)
            .pipe(gulp.dest(config.target.py));

        var css = gulp.src(config.src.css)
            .pipe(gulp.dest(config.target.css));

        var systemJs = gulp.src('./src/assets/systemjs.config.js')
            .pipe(gulp.dest('dist/assets'));
        
        var favicon = gulp.src('./src/assets/favicon.ico')
            .pipe(gulp.dest('dist/assets'));

        return merge(html, py, css, systemJs);
    }
};
