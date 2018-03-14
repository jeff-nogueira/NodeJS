var express = require('express');
var app = express();
var router = express.Router();

router.route('/api/events')
  .get(function(req, res, next) {
    // Código para listar eventos
  })

  .post(function(req, res, next) {
    // Código para criar eventos
  });

router.route('/api/events/:event_id')
  .get(function(req, res, next) {
    // Código para mostrar detalhe do evento
    // baseado no parâmetro id
  })

  .put(function(req, res, next) {
    // Código para atualizar evento
    // baseado no parâmetro id
  })

  .delete(function(req, res, next) {
    // Código para mostrar deletar evento
    // baseado no parâmetro id
  });
