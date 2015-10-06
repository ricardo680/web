'use strict';

angular.module('directives')
.directive('navigationMenu', function navigationMenuDirective() {
	return{
		restrict : 'E',
		templateUrl:'views/directives/navigation-menu.html'
	};
});
