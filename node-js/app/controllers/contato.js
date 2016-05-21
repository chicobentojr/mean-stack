var Contatos = [];

module.exports = function() {
  var Controller = {};

  Controller.getContatos = function(request, response) {
    response.status(200).json(Contatos);
  }

  Controller.saveContato = function(request, response) {
    var contato = request.body;
    contato.id = getLastId();
    Contatos.push(contato);
    response.status(201).send({message:'ok'});
  }

  Controller.deleteContato = function(request, response) {
    var id = request.params.id;

    Contatos = Contatos.filter(function(contato) {
      return contato.id != id;
    });
    response.status(201).send({message:'ok'});
  }

  Controller.updateContato = function(request, response){
    var id = request.params.id,
        novoContato = request.body;

    Contatos.forEach(function(contato) {
      if (contato.id == id){
        contato.nome = novoContato.nome;
        contato.usuario = novoContato.usuario;

      }
    });

    response.status(201).send({message:'ok'});
  }

  Controller.getContato = function(request, response) {
    var id = request.params.id,
        contatoResponse = null;

    for (var i = 0; i < Contatos.length; i++) {
      if (Contatos[i].id == id){
        contatoResponse = Contatos[i];
        break;
      }
    };

    if(contatoResponse) response.status(200).json(contatoResponse);
    else response.status(200).send({message:'Contato não encontrado'});
  }

  return Controller;
}

var getLastId = function(){
  if (Contatos.length > 0){
    return Contatos[Contatos.length - 1].id + 1;
  } else{
    return 1;
  }
}
