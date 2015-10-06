'use strict';

angular.module('services')
	.constant('GET_REPORTS',
		'http://demos.solutiaintelligence.com:81/GoShieldBetaWS/wsService.svc/WebDatosReportes/Get/all/0/_/0/0')
	.constant('GET_ADJUSTERS',
		'http://demos.solutiaintelligence.com:81/GoShieldBetaWS/wsService.svc/WebDatosAjustadores/Get/')
	.constant('GET_USERS',
		'http://demos.solutiaintelligence.com:81/GoShieldBetaWS/wsService.svc/WebDatosUsuarios/Get/')
	.constant('LOGIN',
		'http://localhost/GoShieldWS/services/goshield/goshield.svc/Account/Access')

	.constant('AUTHENTICATED_MAP',
		'http://maps.google.com/maps/api/js?v=3.20&client=AIzaSyBxaB5Jb3R0IR9Ag1P76NvV7yKjrnusRUc')

	;
