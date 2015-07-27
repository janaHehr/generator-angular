'use strict';
var yeoman = require('yeoman-generator');
// var chalk = require('chalk');
// var yosay = require('yosay');
var mkdirp = require('mkdirp');
var _ = require('lodash');

module.exports = yeoman.generators.NamedBase.extend({

    constructor: function() {
        
        yeoman.generators.NamedBase.apply(this, arguments);

    },

    writing: {

        feature: function() {
            this.fs.copyTpl(this.templatePath('feature.js'), this.destinationPath('app/components/' + this.name + '/' + this.name + '.js'), {'name': this.name});
            this.fs.copyTpl(this.templatePath('feature.html'), this.destinationPath('app/components/' + this.name + '/' + this.name + '.html'), {'name': this.name});
            this.fs.copyTpl(this.templatePath('feature.scss'), this.destinationPath('app/components/' + this.name + '/' + this.name + '.scss'), {'name': this.name});
            this.fs.copyTpl(this.templatePath('feature.spec.js'), this.destinationPath('app/components/' + this.name + '/' + this.name + '.spec.js'), {'name': this.name});
        }

    }

});