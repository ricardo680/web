'use strict';

angular.module('services')
    .factory('Adjusters', function AdjustersFactory( $http, $q, GET_ADJUSTERS){

        var _adjusters = [];

        return {
            'all': function(){
                return $http.get(GET_ADJUSTERS)
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            _adjusters.length = 0;
                            angular.forEach(response.data.GetDataAjustadoresResult, function(value, key) {
                                _adjusters.push(value.Ajustador);
                            });
                            return _adjusters;
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


