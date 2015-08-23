'use strict';

var path = require('path');

module.exports = function(plugins) {

    //base variables
    var applicationName = '<%= safeAppName %>';
    var destPath = 'dist/';

    var config = {
        applicationName: applicationName,

        srcJsFiles: ['src/lib/**/*.js',
            'src/app/**/*.js',
            '!bower_components',
            '!src/app/**/*.spec.js'
        ],

        srcTemplateFiles: ['src/app/**/*.html'],
        srcSassFiles: ['**/*.scss',
            '!bower_components/'
        ],

        srcMainSassFile: 'src/assets/sass/main.scss',

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
