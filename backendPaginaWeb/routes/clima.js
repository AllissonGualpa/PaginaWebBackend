var express = require('express');
var router = express.Router();
const { RegistroClima } = require("../models");

// Obtener todos los registros en formato JSON
router.get("/findAll/json", function (req, res, next) {
    RegistroClima.findAll({
      attributes: { exclude: ["updatedAt"] }
    })
      .then(registros => {
        res.json(registros);
      })
      .catch(error => res.status(400).send(error));
  });
  
  // Obtener todos los registros en una vista HTML
  router.get("/findAll/view", function (req, res, next) {
    RegistroClima.findAll({
      attributes: { exclude: ["updatedAt"] }
    })
      .then(registros => {
        res.render("clima", { title: "Registros del Clima", arrClima: registros });
      })
      .catch(error => res.status(400).send(error));
  });

module.exports = router;