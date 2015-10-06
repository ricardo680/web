/**
 * Created by Ricardo on 08/09/2015.
 */
"use strict";

angular.module('directives')
.directive('adjustersList', function adjustersTableDirective() {
    return{
        restrict : 'E',
        templateUrl:'views/directives/adjusters-list.html',
        controller: function ($scope, $timeout, Adjusters ){
 
            //{"Nombre":"Goku  ","Telefono":"3345120987","Direccion":"Av.Union 135 Lafayette","Available":true,"Posicion":{"Latitud":20.6763257258794,"Longitud":-103.421949746228}},
            $scope.adjusters = [];

            $scope.noAdjusters = 0;
            $scope.noAvailable = 0;
            $scope.noBusy = 0;
                
                
            $scope.getAdjusters = function() {
                Adjusters.all()
                    .then(function (data) {
                        $scope.adjusters = data;
                    }, function (error) {
                        // promise rejected, could log the error with: console.log('error', error);
                        //prepareSundayRoastDinner();
                        // que hacer?
                    });
            }();

            $scope.$watch('adjusters', function(newValue, oldValue) {

                $scope.noAdjusters = $scope.adjusters.length

                $scope.noAvailable = 0 ;
                angular.forEach($scope.adjusters, function(value, key) {
                    if (value.Disponible) $scope.noAvailable++;
                });

                $scope.noBusy = 0;
                angular.forEach($scope.adjusters, function(value, key) {
                    if(!value.Disponible) $scope.noBusy++;
                });

            });



        }
    }
});



