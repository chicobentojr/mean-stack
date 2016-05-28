angular.module("app.agenda").controller("ContatoCtrl", function($scope, $routeParams, ApiService){
	$scope.id = $routeParams.id;

	ApiService.selecionarContato($scope.id)
		.then(function(response){
			$scope.contato = response.data;
		}, function(error){
			console.log(error);
		});
});
