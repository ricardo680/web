'use strict';

angular.module('directives')
    .directive('addressReportCard', function addressReportCardDirective() {
        return {
            restrict: 'E',
            templateUrl:'views/directives/address-report-card.html',
            link: function (scope, element, attrs) {

                
                /*scope.results = 0;
                scope.fullAddress = "Av Unión 177, Americana, 44160 Guadalajara, Jal., Mexico";
                scope.no = 123;
                scope.street = "Av Unión";
                scope.sublocality = "Americana";
                scope.locality = "Guadalajara";
                scope.state = "Jal.";
                scope.country = "mx";
                scope.zipCode = 23456;
*/
                scope.fullAddress;
                scope.no;
                scope.street;
                scope.sublocality;
                scope.locality;
                scope.state;
                scope.country;
                scope.zipCode;

    // 4
                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(scope.model.Latitud, scope.model.Longitud);
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {

                            scope.results = results.length;
                            
                            if (results.length > 6){
                                scope.fullAddress = results[0].formatted_address;
                                scope.no = results[0].address_components[0].short_name;
                                scope.street = results[0].address_components[1].short_name;
                                scope.sublocality = results[0].address_components[2].short_name;
                                scope.locality = results[0].address_components[3].short_name;
                                scope.state = results[0].address_components[5].short_name;
                                scope.country = results[0].address_components[6].short_name;
                                try {
                                    scope.ZipCode = results[0].address_components[7].short_name;                                
                                }
                                catch(err) {
                                    var a="";
                                }
                            }


                            //element.text(results[1].formatted_address);
                        } else {
                            var a="";
                            //element.text('Location not found');
                        }
                    } else {
                        var a="";
                        //element.text('Geocoder failed due to: ' + status);
                    }
                });
            }
        }
    });
    



/*

//var yourLocation = new google.maps.LatLng(lat, lng);
//var yourLocation = new google.maps.LatLng(20.778903372855325, -102.83369330289611);
//var yourLocatio20.5293805, -103.3811545n = new google.maps.LatLng(20.827044460608736, -102.76640204313048);
//var yourLocation = new google.maps.LatLng(19.392953205614692, -99.09937569416502);
// 7 5 4
//var yourLocation = new google.maps.LatLng(20.6438413, -103.4080139);


// japon 35.7261077, 139.7628522
// 9

//var yourLocation = new google.maps.LatLng(20.6438413, -103.4080139);
//8 no calle colonia cd cd est pais cp

//var yourLocation = new google.maps.LatLng(20.6766368, -103.3465675);
//7 no calle colonia cd cd est pais cp

//var yourLocation = new google.maps.LatLng(20.7121049, -103.2880068);
//6 calle colonia cd est pais

//var yourLocation = new google.maps.LatLng();
//5 calle colonia cd est pais
var yourLocation = new google.maps.LatLng(20.6176924, -103.2255006);
//4  ruta cd est pais
// considerar otro route??? cual es???


*/
