'use strict';

var del = require('del');

module.exports = function(gulp, plugins, config) {

    // clean destination path
    gulp.task('clean', function() {
        del.sync(config.destPath);
    });

    // build
    gulp.task('build', function(done) {
        plugins.runSequence('clean', ['copy', 'scripts', 'sass', 'lint'], 'copy:server', 'copy:package.json', 'combineDistJsFiles', 'index', done);
    });


    // build (for dev)
    gulp.task('build:dev', function(done) {
        plugins.runSequence('clean', ['copy', 'scripts:dev', 'sass:dev', 'lint'], 'copy:server', 'copy:package.json', 'index:dev', done);
    });
};
