var WelcomeMsg = function() {
    return {
        restrict: 'E',
        scope: {},
        template: '<h1>Welcome!</h1>'
    };
};

var ngModule = require('./../index');

ngModule.directive('welcomeMsg',[WelcomeMsg]);