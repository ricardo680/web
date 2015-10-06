/**
 * Created by Ricardo on 08/09/2015.
 */
"use strict";

angular.module('directives')
.directive('reportsTable', function reportsTableDirective() {
    return{
        restrict : 'E',
        //require: '^stTable',
        templateUrl:'views/directives/reports-table.html',
        controllerAs: 'rt',
        controller: function ($scope, $timeout, Reports){
            var ctrl = this;

            //$scope.displayedReports = [];//Reports.all();
            $scope.reportsCollection = [];
            $scope.displayedReports = [].concat($scope.reportsCollection);
            ctrl.noTefth = 0;
            ctrl.noSinister = 0;
            ctrl.noReported = 0;
            ctrl.noAssisted = 0;
            ctrl.noClosed = 0;
                        


            $scope.getReports = function() {
                Reports.all()
                    .then(function (data) {
                        $scope.reportsCollection = data;
                    }, function (error) {
                        console.log('error', error);
                    });
            }();


            $scope.$watch('displayedReports', function (newVal, oldVal, scope) {
                ctrl.noTefth = 0;
                ctrl.noSinister = 0;
                ctrl.noReported = 0;
                ctrl.noClosed = 0;
                ctrl.noAssisted = 0;
                angular.forEach($scope.reportsCollection, function(value, key) {
                    if (value.Tipo == "theft") ctrl.noTefth++;
                    if (value.Tipo == "sinister") ctrl.noSinister++;
                    if (value.Status == 1) ctrl.noReported++;
                    if (value.Status == 2) ctrl.noClosed++;
                    if (value.Status == 3) ctrl.noAssisted++;
                });
            });

        }
    }
});



