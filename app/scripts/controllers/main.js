'use strict';

/**
 * @ngdoc function
 * @name goShieldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goShieldApp
 */
angular.module('goShieldApp')
	.controller('MainCtrl', function ($scope, Reports, Adjusters) {
    	

    $scope.reports = [];
    $scope.adjusters = [];
    
    // global para listas laterales
    var myMap;

  	$scope.$on('mapInitialized', function(event, map) {
  		myMap = map;

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

  	});


		

		$scope.toggleBounce = function() {
  		if (this.getAnimation() != null) {
    			this.setAnimation(null);
  		} else {
    			this.setAnimation(google.maps.Animation.BOUNCE);
      }
		};


    $scope.$watch('reports', function(newValue, oldValue) {
      if (myMap){
        // si el mapa esta inicializado
        angular.forEach($scope.reports, function(value, key){
          var icon;
          if (value.Status == 1) icon = 'images/icons/reported.svg';
          if(value.Status == 2) icon = 'images/icons/assisted.svg';

          if (value.Status == 1 || value.Status == 2) {
            var marker = new google.maps.Marker({
              map: myMap,
              animation: google.maps.Animation.DROP,
              icon: icon,
              position: {lat: value.Latitud, lng: value.Longitud}
            });
          }
        });
      }
    });
    
    $scope.$watch('adjusters', function(newValue, oldValue) {
      if (myMap){
        // si el mapa esta inicializado
        angular.forEach($scope.adjusters, function(value, key){
          if(value.Latitud && value.Longitud)  { 
            var icon;
            if (value.Disponible) icon = 'images/icons/available.svg';
            if(!value.Disponible) icon = 'images/icons/busy.svg';

            var marker = new google.maps.Marker({
              map: myMap,
              animation: google.maps.Animation.DROP,
              icon: icon,
              position: {lat: value.Latitud, lng: value.Longitud}
            });

          }

        });
      }
    });
          


	});




      // centrar
      //map.setCenter({lat: 20.5879896, lng: -103.3188797} );
      //map.panTo(e.latLng);


        //add on click
      /*
      $scope.placeMarkzer = function(e) {
          var marker = new google.maps.Marker({position: e.latLng, map: map});
          map.panTo(e.latLng);
      }*/
