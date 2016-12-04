'use strict';

var merge = require('merge-stream');

module.exports = function (gulp, plugins) {
    return function () {
        var config = {
            src: {
                angular: 'node_modules/@angular/**/*',
                types: 'node_modules/@types/**/*',
                angularInMemoryWebApi: 'node_modules/angular-in-memory-web-api/**/*',
                bootstrap: 'node_modules/bootstrap/**/*',
                reflectMetadata: 'node_modules/reflect-metadata/**/*',
                rxjs: 'node_modules/rxjs/**/*',
                corejs: 'node_modules/core-js/**/*',
                systemjs: 'node_modules/systemjs/**/*',
                zonejs: 'node_modules/zone.js/**/*'
            },
            target: {
                angular: 'dist/assets/lib/@angular',
                types: 'dist/assets/lib/@types',
                angularInMemoryWebApi: 'dist/assets/lib/angular-in-memory-web-api',
                bootstrap: 'dist/assets/lib/bootstrap',
                reflectMetadata: 'dist/assets/lib/reflect-metadata',
                rxjs: 'dist/assets/lib/rxjs',
                corejs: 'dist/assets/lib/core-js',
                systemjs: 'dist/assets/lib/systemjs',
                zonejs: 'dist/assets/lib/zone.js'
            }
        };

        var angular = gulp.src(config.src.angular)
            .pipe(gulp.dest(config.target.angular));

        var types = gulp.src(config.src.types)
            .pipe(gulp.dest(config.target.types));

        var angularInMemoryWebApi = gulp.src(config.src.angularInMemoryWebApi)
            .pipe(gulp.dest(config.target.angularInMemoryWebApi));

        var bootstrap = gulp.src(config.src.bootstrap)
            .pipe(gulp.dest(config.target.bootstrap));

        var reflectMetadata = gulp.src(config.src.reflectMetadata)
            .pipe(gulp.dest(config.target.reflectMetadata));

        var rxjs = gulp.src(config.src.rxjs)
            .pipe(gulp.dest(config.target.rxjs));

        var corejs = gulp.src(config.src.corejs)
            .pipe(gulp.dest(config.target.corejs));

        var systemjs = gulp.src(config.src.systemjs)
            .pipe(gulp.dest(config.target.systemjs));

        var zonejs = gulp.src(config.src.zonejs)
            .pipe(gulp.dest(config.target.zonejs));

        return merge(angular, types, angularInMemoryWebApi, bootstrap, corejs, reflectMetadata, rxjs, systemjs, zonejs);
    }
};