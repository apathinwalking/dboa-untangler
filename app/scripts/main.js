'use strict';
//please work pleas
var angular = require('angular'); // That's right! We can just require angular as if we were in node
console.log('woo woo');
var WelcomeCtrl = require('./controllers/WelcomeCtrl'); // We can use our WelcomeCtrl.js as a module. Rainbows.

var app = angular.module('myApp', []);
app.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);

