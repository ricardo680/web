/**
 * Created by Ricardo on 08/09/2015.
 */
"use strict";

angular.module('directives')
.directive('reportsList', function reportsListDirective() {
    return{
        restrict : 'E',
        templateUrl:'views/directives/reports-list.html',
        controller: function ($scope, $timeout, Reports){

            $scope.reports = [];

            $scope.noReports = 0;
            $scope.noReported = 0;
            $scope.noAssisted = 0;

            $scope.getReports = function() {
                Reports.all()
                    .then(function (data) {
                        $scope.reports = data;
                    }, function (error) {
                        // promise rejected, could log the error with: console.log('error', error);
                        //prepareSundayRoastDinner();
                        // que hacer?
                    });
            }();


            $scope.$watch('reports', function(newValue, oldValue) {

                $scope.noReports = $scope.reports.length

                $scope.noReported = 0 ;
                $scope.noAssisted = 0;
                angular.forEach($scope.reports, function(value, key) {
                    if (value.Status == 1) $scope.noReported++;
                    if(value.Status == 2) $scope.noAssisted++;

                });
            });

        }

    }
});
