'use strict';

module.exports = function(gulp, plugins, config) {

    // copy content to dist
    gulp.task('copy:content', function() {
        return gulp.src('assets/**/*.*')
            .pipe(gulp.dest(config.destPath + 'content'));
    });

    // copy locales to dist
    gulp.task('copy:locales', function() {
        return gulp.src('locales/**/*.*')
            .pipe(gulp.dest(config.destPath + 'locales'));
    });

    // copy fonts from all bower_components to dist
    gulp.task('copy:fonts', function() {
        return gulp.src('bower_components/**/fonts/*.*')
            .pipe(gulp.dest('fonts'));
    });

    gulp.task('copy:package.json', function() {
        return gulp.src('package.json')
            .pipe(gulp.dest(config.destPath));
    });

    // copy static files to dist
    gulp.task('copy', ['copy:content', 'copy:fonts', 'copy:locales']);




    /*----------watchers----------*/

    gulp.task('watch:locales', function() {
        gulp.watch('locales/**/*.json', ['copy:locales']);
    });

    gulp.task('watch:content', ['watch:locales']);

};
