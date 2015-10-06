'use strict';

angular.module('services')
    .factory('Geocoder', function GeocoderFactory( $q, $timeout){

        var queryPause = 250;

        var _address = {};
        var geocoder = new google.maps.Geocoder();




        var d;



        var executeNext = function (lat, lng) {
            //var task = queue[0],
            geocoder = new google.maps.Geocoder();
            var yourLocation = new google.maps.LatLng(lat, lng);

            geocoder.geocode({ 'latLng': yourLocation }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    //recupera datos

                    _address.no = results[0].address_components[0].short_name;

                    //var latLng = {
                    //    lat: result[0].geometry.location.lat(),
                    //    lng: result[0].geometry.location.lng()
                    //};

                    //queue.shift();

                    //locations[task.address] = latLng;
                    //$localStorage.locations = JSON.stringify(locations);

                    //task.d.resolve(latLng);
                    d.resolve(_address);

                    //if (queue.length) {
                    //    $timeout(executeNext, queryPause);
                    //}
                } else if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                    //queue.shift();
                    d.reject({
                        type: 'zero',
                        message: 'Zero results for geocoding coords ' + lat + ", " + lng
                    });
                } else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                    queryPause += 250;
                    $timeout(executeNext, queryPause);        
                } else if (status === google.maps.GeocoderStatus.REQUEST_DENIED) {
                    //queue.shift();
                    d.reject({
                        type: 'denied',
                        message: 'Zero results for geocoding coords ' + lat + ", " + lng
                    });
                } else if (status === google.maps.GeocoderStatus.INVALID_REQUEST) {
                    //queue.shift();
                    d.reject({
                        type: 'invalid',
                        message: 'Zero results for geocoding coords ' + lat + ", " + lng
                    });
                }
            });
        };




        return {
            'getAddress': function(latitude, longitude){

                d = $q.defer();
                //_address.no = "2223";
                //d.resolve(_address);

                executeNext(latitude, longitude);
/*
                if (_.has(locations, address)) {
                    $timeout(function () {
                        d.resolve(locations[address]);
                    });
                } else {
                    queue.push({
                        address: address,
                        d: d
                    });

                    if (queue.length === 1) {
                        executeNext();
                    }
                }
*/
                return d.promise;
            }
        };
    });


/*
            $scope.address = "address";
            $scope.sublocality = "sublocality";
            $scope.locality = "locality";


            $scope.getGeocoderInfo = function(){
                var geocoder = new google.maps.Geocoder();
                var yourLocation = new google.maps.LatLng(20.6438413, -103.4080139);

                geocoder.geocode({ 'latLng': yourLocation }, function(results, status){
                    setTimeout("wait = true", 2000);
                    if (status === google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            $scope.address = 
                                results[0].address_components[1].short_name + 
                                " " +
                                results[0].address_components[0].short_name;
                                    
                            $scope.sublocality = results[0].address_components[2].short_name;

                            $scope.locality = 
                                results[0].address_components[6].short_name +
                                " " +
                                results[0].address_components[3].short_name +
                                ", " +
                                results[0].address_components[4].short_name;

                            /*
                            var no = results[0].address_components[0].short_name
                            var calle = results[0].address_components[1].short_name
                            var col = results[0].address_components[2].short_name
                            var cd = results[0].address_components[3].short_name
                            var est = results[0].address_components[4].short_name
                            var pais = results[0].address_components[5].short_name
                            var cp = results[0].address_components[6].short_name
                            *//*
                        } else {
                            window.alert('No results found');
                        }
                    } else {
                        window.alert('Geocoder failed due to: ' + status);
                    }
                });



            }();


*/