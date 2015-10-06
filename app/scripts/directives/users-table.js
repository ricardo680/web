/**
 * Created by Ricardo on 08/09/2015.
 */
"use strict";

angular.module('directives')
.directive('usersTable', function usersTableDirective() {
    return{
        restrict : 'E',
        //require: '^stTable',
        templateUrl:'views/directives/users-table.html',
        controllerAs: 'ut',
        controller: function ($scope, $timeout, Users){
            var ctrl = this;

            //$scope.displayedUsers = [];//Users.all();
            $scope.usersCollection = [];
            $scope.displayedUsers = [].concat($scope.usersCollection);
            ctrl.noTefth = 0;
            ctrl.noSinister = 0;
            ctrl.noReported = 0;
            ctrl.noAssisted = 0;
            ctrl.noClosed = 0;
                        


            $scope.getUsers = function() {
                Users.all()
                    .then(function (data) {
                        $scope.usersCollection = data;
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
                angular.forEach($scope.usersCollection, function(value, key) {
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



