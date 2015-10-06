angular.module('directives')
.directive('navigationMenu', function navigationMenuDirective() {
	return{
		restrict : 'E',
		templateUrl:'templates/directives/navigation-menu.html'
	};
});
