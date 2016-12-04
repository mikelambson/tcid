'use strict';

var del = require('del');

// remove dist folder
module.exports = function (gulp, plugins) {
    return function () {
        return del([
            'dist'
        ]);
    };
};
