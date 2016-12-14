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
                ico: 'src/assets/ico/*.ico',
                images: 'src/assets/images/**/*.*',
            },
            target: {
                html: 'dist/templates',
                py: 'dist',
                css: 'dist/assets/css',
                ico: 'dist/assets/ico',
                images: 'dist/assets/images',
            }
        }

        var html = gulp.src(config.src.html)
            .pipe(gulp.dest(config.target.html));

        var py = gulp.src(config.src.py)
            .pipe(gulp.dest(config.target.py));

        var css = gulp.src(config.src.css)
            .pipe(gulp.dest(config.target.css));

        var ico = gulp.src(config.src.ico)
            .pipe(gulp.dest(config.target.ico));

        var images = gulp.src(config.src.images)
            .pipe(gulp.dest(config.target.images));

        var systemJs = gulp.src('./src/assets/systemjs.config.js')
            .pipe(gulp.dest('dist/assets'));
        
        return merge(html, py, css, ico, images, systemJs);
    }
};
