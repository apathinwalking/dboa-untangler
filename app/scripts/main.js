'use strict';


var angular = require('angular');
require('angular-bootstrap-npm');//TODO:use napa for this...
require('./components/welcome');

angular.element(document).ready(function(){
    var requires = [
        'components.welcome',
        'ui.bootstrap'
    ];

    angular.module('app',requires);
    angular.bootstrap(document,['app']);
});


