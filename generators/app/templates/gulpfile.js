'use strict';

var gulp = require('gulp');
var path = require('path');

var plugins = require('gulp-load-plugins')({
    pattern: '*',
    scope: ['dependencies', 'devDependencies']
});

//base variables
var applicationName = '<%= safeAppName %>';
var srcPublicPath = 'public/';
var destPath = 'dist/';
var destPublicPath = destPath + 'public/';

var config = {
    applicationName: applicationName,

    srcServerFiles: 'server/**/*.*',
    srcPublicPath: srcPublicPath,
    srcJsFiles: [srcPublicPath + 'lib/**/*.js',
                 srcPublicPath + 'app/**/*.js',
                 '!' + srcPublicPath + '/bower_components',
                 '!' + srcPublicPath + 'app/**/*.spec.js'],

    srcTemplateFiles: [srcPublicPath + 'app/**/*.html'],
    srcSassFiles: [srcPublicPath + '/**/*.scss',
                   '!' + srcPublicPath + '/bower_components/'],

    srcMainSassFile: srcPublicPath + 'less/main.less',


    destPath: destPath,
    destPublicPath: destPublicPath,

    destJsPath: destPublicPath + 'js/',
    destCssPath: destPublicPath + 'css/',
    destServerPath: destPath + 'server/',

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
require('./gulp-tasks/copy.js')(gulp, plugins, config);
require('./gulp-tasks/watchers.js')(gulp, plugins, config);
require('./gulp-tasks/build.js')(gulp, plugins, config);
require('./gulp-tasks/scripts.js')(gulp, plugins, config);
require('./gulp-tasks/styles.js')(gulp, plugins, config);
require('./gulp-tasks/run.js')(gulp, plugins, config);
require('./gulp-tasks/profile-dev.js')(gulp, plugins, config);
