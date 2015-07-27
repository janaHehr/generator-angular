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


    // copy index.html and inject concated js dist file
    gulp.task('index', function() {
        return gulp.src('index.html')
            .pipe(plugins.inject(gulp.src([config.destJsPath + config.destCombinedJsFile, config.destCssPath + config.destCssFile], {
                read: false
            }), {
              ignorePath:'/dist/',
              addRootSlash: true
            }))
            .pipe(gulp.dest(config.destPath));
    });

    // copy index.html and inject js dist files
    gulp.task('index:dev', function() {
        return gulp.src('index.html')
            .pipe(plugins.inject(gulp.src(config.destJsFiles.concat([config.destCssPath + config.destCssFile]), {
                read: false
            }), {
              ignorePath:'/dist/',
              addRootSlash: true
            }))
            .pipe(gulp.dest(config.destPath));
    });
};
