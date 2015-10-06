'use strict';

angular.module('services')
    .factory('Users', function UsersFactory( $http, $q, GET_USERS, LOGIN){


        var _users = [];

        return {
            'all': function(){
                return $http.get(GET_USERS)
                    .then(function(response) {
                        if (typeof response.data === 'object') {
                            _users.length = 0;
                            angular.forEach(response.data.GetDataUsuariosResult, function(value, key) {
                                _users.push(value.Usuario);
                            });
                            return _users;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }
                    }, function(error) {
                        // something went wrong
                        console.log('error', error);
                        return $q.reject(response.data);
                    });
            },
            'login': function() {
                var email = 'call_of_fate@gmail.com';
                var password = '12';

                var headers = {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    };

                var req = {
                        method: 'POST',
                        url: LOGIN,
                        //headers: headers,
                        data: JSON.stringify( { email: email, password: password })
                    }

                return $http(req)
                    .then(function(response) {
                        var str = "";
                        /*
                        if (typeof response.data === 'object') {
                            _users.length = 0;
                            angular.forEach(response.data.GetDataUsuariosResult, function(value, key) {
                                _users.push(value.Usuario);
                            });
                            return _users;
                        } else {
                            // invalid response
                            return $q.reject(response.data);
                        }*/
                    }, function(error) {
                        // something went wrong
                        console.log('error', error);
                        return $q.reject(error.data);
                    });
            }
        };
    });


