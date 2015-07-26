'use strict';

module.exports = function(gulp, plugins, config) {
    // process sass file to css
    gulp.task('sass', function() {
        return gulp.src(config.srcMainSassFile)
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer({
                cascade: false
            }))
            .pipe(plugins.minifyCss({
                advanced: false
            }))
            .pipe(plugins.rename(config.destCssFile))
            .pipe(gulp.dest(config.destCssPath));
    });

    // process sass file to css without minify
    gulp.task('sass:dev', function() {
        return gulp.src(config.srcMainSassFile)
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer({
                cascade: false
            }))
            .pipe(plugins.minifyCss({
                advanced: false
            }))
            .pipe(plugins.rename(config.destCssFile))
            .pipe(gulp.dest(config.destCssPath));
    });
};
