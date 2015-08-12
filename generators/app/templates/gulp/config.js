'use strict';

var path = require('path');

module.exports = function(plugins) {

    //base variables
    var applicationName = '<%= safeAppName %>';
    var destPath = 'dist/';

    var config = {
        applicationName: applicationName,

        srcJsFiles: ['lib/**/*.js',
            'app/**/*.js',
            '!bower_components',
            '!app/**/*.spec.js'
        ],

        srcTemplateFiles: ['app/**/*.html'],
        srcSassFiles: ['**/*.scss',
            '!bower_components/'
        ],

        srcMainSassFile: 'assets/sass/main.scss',

        destPath: destPath,

        destJsPath: destPath + 'js/',
        destCssPath: destPath + 'css/',

        destJsFile: applicationName + '.js',
        destVendorFile: 'vendor.js',
        destTemplateFile: applicationName + '-templates.js',
        destCombinedJsFile: applicationName + '.min.js',
        destCssFile: 'main.min.css',
        karmaConfigFile: path.resolve('karma.conf.js')
    };

    config.destJsFiles = [config.destJsPath + config.destVendorFile, config.destJsPath + config.destJsFile, config.destJsPath + config.destTemplateFile];
    config.srcVendorFiles = plugins.mainBowerFiles().filter(function(file) {
        return file.indexOf('.js') > -1 && file.indexOf('.css') === -1;
    });
    
    return config;
};
