'use strict';

var useref = require('gulp-useref');

module.exports = function (gulp, plugins) {
    return function () {
        return gulp.src('src/templates/index.html')
            .pipe(useref())
            .pipe(gulp.dest('dist'));
    }
};
