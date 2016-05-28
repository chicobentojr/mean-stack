var Contatos = [];

module.exports = function(app) {
  var Contato = app.models.Contato;
  var Controller = {};

  Controller.getContatos = function(request, response) {
    Contato.find(function(error, contatos){
      if(!error)
        return response.status(200).send(contatos);
      else
        return response.status(500).send(error);
    });
  }

  Controller.saveContato = function(request, response) {
    var contato = request.body;

    Contato.create(contato)
      .then(function(success){
        response.status(200).send({message: success});
      }, function(error){
        response.status(500).send({message: error});
      });
  }

  Controller.deleteContato = function(request, response) {
    var id = request.params.id;

    Contato.remove({_id:id}, function(error){
      if(!error)
        return response.status(200).send({message: "Contato deletado com sucesso."});
      else
        return response.status(500).send(error);
    });
  }

  Controller.updateContato = function(request, response){
    var id = request.params.id,
        novoContato = request.body,
        contato = {};

    contato.nome = novoContato.nome;
    contato.sobrenome = novoContato.sobrenome;
    contato.idade = novoContato.idade;
    contato.telefone = novoContato.telefone;
    contato.email = novoContato.email;

    Contato.findOneAndUpdate({_id: id}, contato, {upsert: true},
      function(error, contato){
        if (!error)
          return response.status(200).send(contato);
        else
          return response.status(500).send(error);
      });
  }

  Controller.getContato = function(request, response) {
    var id = request.params.id;

    Contato.findOne({_id:id}, function(error, contato){
      if(!error)
        return response.status(200).send(contato);
      else
        return response.status(500).send(error);
    });
  }

  return Controller;
}
