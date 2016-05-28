angular.module("app.agenda").controller("ContatosCtrl", function($scope, $location, ApiService){

	$scope.listarContatos = function(){
		ApiService.listarContatos()
			.then(function(response){
				$scope.contatos = response.data;
			},function (error){
				console.log(error);
			});
	};

	$scope.salvar = function(contato){
		if($scope.editando){
			ApiService.atualizarContato(contato._id, contato)
				.then(function(response){
					$('#modalSucesso').modal('show');
					$scope.contato = {};
					$scope.listarContatos();
					$scope.editando = false;
				}, function(error){
					console.log(error);
				});
		}
		else {
			ApiService.adicionarContato(contato)
				.then(function (response){
					$('#modalSucesso').modal('show');
					$scope.contato = {};
					$scope.listarContatos();
				}, function (error){
					console.log(error);
				});
		}
	};

	$scope.editarContato = function(contato){
		$scope.contato = angular.copy(contato);
		$scope.editando = true;
	}


	$scope.remover = function(index){
		var id = $scope.contatos[index]._id;

		ApiService.deletarContato(id).success(function(){
			$scope.contatos.splice(index, 1);
		});
	}

	$scope.visualizar = function(id){
		$location.path("/contato/" + id);
	}

	$scope.listarContatos();
});
