'use strict';

angular.module('directives')
.directive('adjusterCard', function adjusterCardDirective() {
	return {
		restrict : 'E',
		templateUrl:'views/directives/adjuster-card.html',
		scope: {
			model: "="
		},
		controller: function($scope){
			
			$scope.visible = false;
	
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
