var usuariosApp = angular.module('usuariosApp', ['ngGrid']);

usuariosApp.controller('CuadriculaCtrl', function($scope, $http) {
	
	$http({
		method : 'GET',
		url : 'http://rest-service.guides.spring.io/greeting'
	}).success(function(data, status, headers, config) {
		$scope.status = status;
		$scope.obtenerJson = data;
	}).error(function(data, status, headers, config) {
		$scope.data = data || "Peticion fallida";
		$scope.status = status;
	});	
    
    $scope.usuarios = { data: 'obtenerJson',
    	columnDefs: [
    	{field: 'id', displayName: 'Identificacion'},
    	{field: 'content', displayName: 'Contenido'}
    	]
    }; 

});