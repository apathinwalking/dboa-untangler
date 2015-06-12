var dboa = require('dboa-js');
var _ = require('lodash');

var Ctrl = function($scope,$q,init){
    init.getData()
        .then(function(data){
            console.log(data);
            _.forEach(data,function(val,key){
                console.log(key);
                $scope[key] = val;
            });
        });

};

var ngModule = require('./');

ngModule.controller('ctrl',['$scope','$q','init',Ctrl]);