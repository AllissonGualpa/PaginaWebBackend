var express = require('express');
var router = express.Router();
const { PronosticoClima } = require("../models");

// Obtener todos los registros de pronóstico en formato JSON
router.get("/findAll/json", function (req, res, next) {
    PronosticoClima.findAll({
      attributes: { exclude: ["updatedAt"] }
    })
    .then(pronosticos => {
      res.json(pronosticos);
    })
    .catch(error => res.status(400).send(error));
  });
  
  // Obtener todos los registros en una vista HTML
  router.get("/findAll/view", function (req, res, next) {
    PronosticoClima.findAll({
      attributes: { exclude: ["updatedAt"] }
    })
    .then(pronosticos => {
      res.render("pronosticoclima", { title: "Registros del Pronóstico del Clima", arrPronostico: pronosticos });
    })
    .catch(error => res.status(400).send(error));
  });

  module.exports = router;