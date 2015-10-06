/**
 * Created by Ricardo on 08/09/2015.
 */
"use strict";

angular.module('directives')
.directive('adjustersTable', function adjustersTableDirective() {
    return{
        restrict : 'E',
        //require: '^stTable',
        templateUrl:'views/directives/adjusters-table.html',
        controllerAs: 'at',
        controller: function ($scope, $timeout, Adjusters){
            var ctrl = this;

            //$scope.displayedReports = [];//Reports.all();
            $scope.adjustersCollection = [];
            $scope.displayedAdjusters = [].concat($scope.adjustersCollection);
            ctrl.noTefth = 0;
            ctrl.noSinister = 0;
            ctrl.noReported = 0;
            ctrl.noAssisted = 0;
            ctrl.noClosed = 0;
                        


            $scope.getReports = function() {
                Adjusters.all()
                    .then(function (data) {
                        $scope.adjustersCollection = data;
                    }, function (error) {
                        console.log('error', error);
                    });
            }();


            $scope.$watch('displayedAdjusters', function (newVal, oldVal, scope) {
                ctrl.noTefth = 0;
                ctrl.noSinister = 0;
                ctrl.noReported = 0;
                ctrl.noClosed = 0;
                ctrl.noAssisted = 0;
                angular.forEach($scope.adjustersCollection, function(value, key) {
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



