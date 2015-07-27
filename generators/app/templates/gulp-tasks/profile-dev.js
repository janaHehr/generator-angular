'use strict';

module.exports = function(gulp, plugins, config) {

  // dev workflow: run tests, build for dev, start all watchers, start local webserver
  gulp.task('dev', function(done) {
    plugins.runSequence('build:dev', 'watch:all', 'webserver', done);
  });

};
