'use strict';


var angular = require('angular');
require('angular-bootstrap-npm');//TODO:use napa for this...
require('./components/directives/welcome');

angular.element(document).ready(function(){
    var requires = [
        'components.welcome',
        'ui.bootstrap',
        'ui.layout'
    ];

    angular.module('app',requires);
    angular.bootstrap(document,['app']);
});


