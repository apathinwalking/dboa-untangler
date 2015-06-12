'use strict';

var angular = require('angular');

require('./components/welcome');

angular.element(document).ready(function(){
    require('ipc').on('connection',function(message){
        console.log(message);
    });
    var requires = [
        'components.welcome'
    ];

    angular.module('app',requires);
    angular.bootstrap(document,['app']);
});


