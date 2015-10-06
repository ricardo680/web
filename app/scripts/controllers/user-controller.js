'use strict';

angular.module('controllers')
  .controller('UserCtrl', function ($scope, $window, Users) {
  	//$window.sessionStorage.usr = "tu mama";
  	//$window.sessionStorage.usr = 2;
  	//$window.sessionStorage.u = 3;

  	var autenticado = $window.sessionStorage;
  	
  	$scope.user = "";
  	$scope.password = "";


    $scope.login = function () {
      Users.login()
        .then(function (data) {
          var token = "0698ceb2-691c-11e5-9d70-feff819cdc9f";
          // peticion de servicio

          // asignacion a sesion
      
          $window.sessionStorage.usr = data;

        }, function (error) {
          // promise rejected, could log the error with: console.log('error', error);
          //prepareSundayRoastDinner();
          // que hacer?
        });
    }();


    // todas variables de sesion Quita sesiones
	$scope.logout = function (){
		$window.sessionStorage.splice(0, $window.sessionStorage.length);
	}


  });
