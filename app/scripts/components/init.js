var dboa = require('dboa-js');
var remote = require('remote');
var _ = require('lodash');

var ngModule = require('./');

ngModule.factory('init',['$q',function($q){
    var init = {};

    init.getData = function(knex){
        var deferred = $q.defer();
        var tmp = {};
        tmp.knex = getKnex();
        dboa.db.query.getTableIds(tmp.knex)
            .then(function(results){
                tmp.tables = results;
                tmp.schemas = _.reduce(_.groupBy(results,'table_schema'),function(result,value,key){
                    result.push({'table_schema':key, 'tables':value});
                    return result;
                },[]);
                deferred.resolve(tmp);
            });
        return deferred.promise;
    };

    function getKnex(){
        //TODO: deal with non-existant config
        var conf = remote.require('./config.json');
        return require('knex')({'client':'pg','connection':conf.pg_conn_str});
    }

    return init;
}]);
