var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');
var Author = mongoose.model('author', {nome: String, profissao: String});
var bognar = new Author({nome: 'Bognar', profissao :'Programador'});
bognar.save(function (err) {
      if (err) throw err;
      console.log('Dados salvos com sucesso!');
});
