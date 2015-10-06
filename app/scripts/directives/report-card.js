'use strict';

angular.module('directives')
.directive('reportCard', function reportCardDirective() {
	return{
		restrict : 'E',
		templateUrl:'views/directives/report-card.html',
		scope: {
			model: "="
		},
		controller: function($scope){
			
			$scope.visible = false;
			//$scope.address = "address";
			//$scope.sublocality = "sublocality";
			//$scope.locality = "locality";

			$scope.toggleDetails = function(){
				$scope.visible = !$scope.visible;
			};

			$scope.hideDetails = function(){
				$scope.visible = false;
			};

			$scope.showDetails = function(){
				$scope.visible = true;
			};

		}

	}
});
