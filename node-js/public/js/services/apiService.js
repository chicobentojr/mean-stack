angular.module("app.agenda").service("ApiService", function($http){
  this.listarContatos = function(){
    return $http.get("http://localhost:3000/api/contatos");
  };
  this.selecionarContato = function(id){
    return $http.get("http://localhost:3000/api/contato/"+id);
  };
  this.adicionarContato = function(contato){
    return $http.post("http://localhost:3000/api/contato", contato);
  };
  this.deletarContato = function(id){
    return $http.delete("http://localhost:3000/api/contato/"+id);
  };
  this.atualizarContato = function(id, contato){
    return $http.put("http://localhost:3000/api/contato/"+id, contato);
  };
});
