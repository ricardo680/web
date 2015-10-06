'use strict';

angular.module('services')
    .factory('Reports', function ReportsFactory( $http, $q, GET_REPORTS){

        var _reports = [];

        return {
            'all': function(){
                return $http.get(GET_REPORTS)
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            _reports.length = 0;
                            angular.forEach(response.data.GetDataReportesResult, function(value, key) {
                                _reports.push(value.Reporte);
                            });
                            return _reports;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }
                    }, function(error) {
                        // something went wrong
                        console.log('error', error);
                        return $q.reject(response.data);
                    });
            }
        };
    });



