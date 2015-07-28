'use strict';

var gulp = require('gulp');
var path = require('path');

var plugins = require('gulp-load-plugins')({
    pattern: '*',
    scope: ['dependencies', 'devDependencies']
});

//base variables
var applicationName = '<%= safeAppName %>';
var destPath = 'dist/';

var config = {
    applicationName: applicationName,

    srcJsFiles: ['lib/**/*.js',
                 'app/**/*.js',
                 '!bower_components',
                 '!app/**/*.spec.js'],

    srcTemplateFiles: ['app/**/*.html'],
    srcSassFiles: ['**/*.scss',
                   '!bower_components/'],

    srcMainSassFile: 'assets/sass/main.scss',

    destPath: destPath,

    destJsPath: destPath + 'js/',
    destCssPath: destPath + 'css/',

    destJsFile: applicationName + '.js',
    destVendorFile: 'vendor.js',
    destTemplateFile: applicationName + '-templates.js',
    destCombinedJsFile: applicationName + '.min.js',
    destCssFile: 'main.min.css'/*,
    karmaConfigFile: path.resolve('karma.conf.js')*/
};

config.destJsFiles = [config.destJsPath + config.destVendorFile, config.destJsPath + config.destJsFile, config.destJsPath + config.destTemplateFile];
config.srcVendorFiles = plugins.mainBowerFiles().filter(function(file) {
    return file.indexOf('.js') > -1 && file.indexOf('.css') === -1;
});

//add all javascript files that are not bower main files (see '.bower.json' in the bower_components folder)
//all javascript from the lib-dir must not be included here (see var javaScriptFile - beware of file order!!)
// config.srcVendorFiles.push(path.resolve(__dirname + '/public/bower_components/path/to/js'));


//import all tasks

require('./gulp-tasks/content.js')(gulp, plugins, config);
require('./gulp-tasks/index.js')(gulp, plugins, config);
require('./gulp-tasks/scripts.js')(gulp, plugins, config);
require('./gulp-tasks/styles.js')(gulp, plugins, config);
require('./gulp-tasks/webserver.js')(gulp, plugins, config);

require('./gulp-tasks/custom/build-run.js')(gulp, plugins, config);
require('./gulp-tasks/custom/watch-all.js')(gulp, plugins, config);
