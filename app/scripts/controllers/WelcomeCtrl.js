'use strict';

var WelcomeCtrl = function($scope,$q,config) {
    "use strict";
    $scope.testVar = 'We are up and running from a required module!';
    $scope.config = config.getConfig();//
};

module.exports = WelcomeCtrl;