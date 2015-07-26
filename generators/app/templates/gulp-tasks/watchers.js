'use strict';

module.exports = function(gulp, plugins, config) {

    // start all watchers
    gulp.task('watch:all', ['watch:sass', 'watch:js', 'watch:vendor', 'watch:templates', 'watch:index', 'watch:locales']);

    // on less changes
    gulp.task('watch:sass', function() {
        gulp.watch(config.srcSassFiles, ['sass']);
    });

    // on js changes
    gulp.task('watch:js', function() {
        gulp.watch(config.srcJsFiles, ['lint', 'package:js']);
    });

    // on vendor changes
    gulp.task('watch:vendor', function() {
        gulp.watch(config.srcVendorFiles, ['package:vendor']);
    });

    // on template changes
    gulp.task('watch:templates', function() {
        gulp.watch(config.srcTemplateFiles, ['package:templates']);
    });

    gulp.task('watch:index', function() {
        gulp.watch(config.srcPublicPath + 'index.html', ['index:dev']);
    });

    gulp.task('watch:locales', function() {
        gulp.watch(config.srcPublicPath + 'locales/**/*.json', ['copy:locales']);
    });

};
