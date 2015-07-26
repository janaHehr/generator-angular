'use strict';

module.exports = function(gulp, plugins, config) {

    // copy content to dist
    gulp.task('copy:content', function() {
        return gulp.src(config.srcPublicPath + 'content/**/*.*')
            .pipe(gulp.dest(config.destPublicPath + 'content'));
    });

    // copy locales to dist
    gulp.task('copy:locales', function() {
        return gulp.src(config.srcPublicPath + 'locales/**/*.*')
            .pipe(gulp.dest(config.destPublicPath + 'locales'));
    });

    // copy fonts from all bower_components to dist
    gulp.task('copy:fonts', function() {
        return gulp.src(config.srcPublicPath + 'bower_components/**/fonts/*.*')
            .pipe(gulp.dest(config.destPublicPath + 'fonts'));
    });

    gulp.task('copy:server', function() {
        return gulp.src(config.srcServerFiles)
            .pipe(gulp.dest(config.destServerPath));
    });

    gulp.task('copy:package.json', function() {
        return gulp.src('package.json')
            .pipe(gulp.dest(config.destPath));
    });

    // copy static files to dist
    gulp.task('copy', ['copy:content', 'copy:fonts', 'copy:locales']);


    // copy index.html and inject combines js dist file
    gulp.task('index', function() {
        return gulp.src(config.srcPublicPath + 'index.html')
            .pipe(plugins.inject(gulp.src([config.destJsPath + config.destCombinedJsFile, config.destCssPath + config.destCssFile], {
                read: false
            }), {
                ignorePath: '/dist/public',
                addRootSlash: false
            }))
            .pipe(gulp.dest(config.destPublicPath));
    });

    // copy index.html and inject js dist files
    gulp.task('index:dev', function() {
        return gulp.src(config.srcPublicPath + 'index.html')
            .pipe(plugins.inject(gulp.src(config.destJsFiles.concat([config.destCssPath + config.destCssFile]), {
                read: false
            }), {
                ignorePath: '/dist/public',
                addRootSlash: false
            }))
            .pipe(gulp.dest(config.destPublicPath));
    });
};
