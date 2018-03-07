 var express = require('express')
   , expressValidator = require('express-validator')
   , app = express();
 app.use(express.bodyParser());
 app.use(expressValidator);
 app.post('/cadastro', function(req, res) {
   
   var errors = [];
   
   req.onValidationError(function(erro) {
     console.log('Validation error: ' + erro);
     errors.push(erro);
     return this;
   });
 
   var usuario = req.body.usuario;
 
   req.assert(usuario.idade, 'Idade esta vazio').isEmpty();
   req.assert(parseInt(usuario.idade), 'Menor de idade').min(18);
   req.assert(usuario.nome, 'Nome esta vazio').isEmpty();
   req.assert(usuario.email, 'Email invalido').isEmail();
   
   if (errors.length) {
     res.send('Erros: ' + errors.join(', '), 500);
   }else{
     res.send('Dados validado com sucesso', 200);
   }
 });
 app.listen(8888);