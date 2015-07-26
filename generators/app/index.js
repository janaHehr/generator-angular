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

        this.config = {
            appName: this.appName,
            safeAppName: _.camelCase(this.appName)
        };
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
            this.fs.copyTpl(this.templatePath('bower.json'), this.destinationPath('bower.json'), this.config);
            this.fs.copyTpl(this.templatePath('package.json'), this.destinationPath('package.json'), this.config);
            this.fs.copy(this.templatePath('.jshintrc'), this.destinationPath('.jshintrc'));
            this.fs.copy(this.templatePath('.bowerrc'), this.destinationPath('.bowerrc'));
            this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
            this.fs.copy(this.templatePath('.gitattributes'), this.destinationPath('.gitattributes'));
        },
        server: function() {
            this.fs.copy(this.templatePath('server/**/*'), this.destinationPath('server'));
        },
        app: function() {
            this.fs.copyTpl(this.templatePath('public/**/*'), this.destinationPath('public'), this.config);

            //create empty folders
            mkdirp('public/locales');
            mkdirp('public/lib');
            mkdirp('public/content');
            mkdirp('public/app/components');
        },
        gulp: function() {
            this.fs.copy(this.templatePath('gulp-tasks/**/*'), this.destinationPath('gulp-tasks'));
            this.fs.copyTpl(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'), this.config);
        }
    },

    install: function() {
        this.installDependencies();
    }
});
