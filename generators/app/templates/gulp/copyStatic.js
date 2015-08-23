'use strict';

module.exports = function(gulp, plugins, config) {

    // copy content to dist
    gulp.task('copyStatic:content', function() {
        return gulp.src('src/assets/**/*.*')
            .pipe(gulp.dest(config.destPath + 'content'));
    });

    // copy locales to dist
    gulp.task('copyStatic:locales', function() {
        return gulp.src('src/locales/**/*.*')
            .pipe(gulp.dest(config.destPath + 'locales'));
    });

    // copy fonts from all bower_components to dist
    gulp.task('copyStatic:fonts', function() {
        return gulp.src('bower_components/**/fonts/*.*')
            .pipe(gulp.dest('fonts'));
    });

    // copy static files to dist
    gulp.task('copyStatic', ['copyStatic:content', 'copyStatic:locales', 'copyStatic:fonts']);

    /*----------watchers----------*/

    gulp.task('watch:content', function() {
        gulp.watch('src/assets/**/*.*', ['copyStatic:content']);
    });

    gulp.task('watch:locales', function() {
        gulp.watch('src/locales/**/*.json', ['copyStatic:locales']);
    });

    gulp.task('watch:fonts', function() {
        gulp.watch('bower_components/**/fonts/*.*', ['copyStatic:fonts']);
    });


    gulp.task('watch:copyStatic', ['watch:content', 'watch:locales', 'watch:fonts']);

};
