'use strict';
var yeoman = require('yeoman-generator');
// var chalk = require('chalk');
// var yosay = require('yosay');
var mkdirp = require('mkdirp');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
    constructor: function() {
        yeoman.generators.Base.apply(this, arguments);

        // This makes `appname` a required argument.
        this.argument('appName', {
            type: String,
            required: true
        });

        this.names = {
            appName: this.appName,
            safeAppName: _.camelCase(this.appName)
        };

        this.config.save();
    },
    // prompting: function() {
    //     var done = this.async();
    //
    //     this.log(yosay(
    //         'Welcome to the super-duper ' + chalk.red('node-angular-app') + ' generator!'
    //     ));
    //
    //     var prompts = [{
    //         type: 'input',
    //         name: 'appName',
    //         message: 'What should be the app name?',
    //         default: 'MyApp'
    //     }];
    //
    //     this.prompt(prompts, function(props) {
    //         this.props = props;
    //         this.props.safeAppName = _.camelCase(props.appName);
    //
    //         done();
    //     }.bind(this));
    // },

    writing: {
        config: function() {
            this.fs.copyTpl(this.templatePath('bower.json'), this.destinationPath('bower.json'), this.names);
            this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), this.names);
            this.fs.copy(this.templatePath('.jshintrc'), this.destinationPath('.jshintrc'));
            this.fs.copy(this.templatePath('.bowerrc'), this.destinationPath('.bowerrc'));
            this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
            this.fs.copy(this.templatePath('.gitattributes'), this.destinationPath('.gitattributes'));
        },

        app: function() {
            this.fs.copyTpl(this.templatePath('app/**/*'), this.destinationPath('app'), this.names);
            this.fs.copy(this.templatePath('assets/**/*'), this.destinationPath('assets'));
            this.fs.copy(this.templatePath('index.html'), this.destinationPath('index.html'), this.names);
            this.fs.copy(this.templatePath('favicon.ico'), this.destinationPath('favicon.ico'));

            //create empty folders
            mkdirp('app/locales');
            mkdirp('lib');
            mkdirp('assets/img');
            mkdirp('app/components');
            mkdirp('app/shared');
        },
        gulp: function() {
            this.fs.copy(this.templatePath('gulp-tasks/**/*'), this.destinationPath('gulp-tasks'));
            this.fs.copyTpl(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'), this.names);
        }
    },

    install: function() {
        this.installDependencies();
    }
});
