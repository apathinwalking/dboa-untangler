'use strict';
//please work pleas
var q = require('q');
var angular = require('angular'); // That's right! We can just require angular as if we were in node
var knex = require('knex');
var WelcomeCtrl = require('./controllers/WelcomeCtrl');


var app = angular.module('myApp', []);//
app.service('config',function(){
    this.getConfig = function(){
        return 'hello!';
    };//
});
app.controller('WelcomeCtrl', ['$scope',WelcomeCtrl]);


