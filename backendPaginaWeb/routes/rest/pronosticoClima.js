var express = require('express');
var router = express.Router();
const { PronosticoClima } = require("../../models");

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
  
// Ruta POST para guardar el pronóstico
router.post("/save", function(req, res, next) {
  let { ciudad, fecha, temperatura, humedad, viento, descripcion, icono } = req.body;
  
  PronosticoClima.create({
    ciudad: ciudad,
    fecha: fecha,
    temperatura: parseFloat(temperatura),
    humedad: parseFloat(humedad),
    viento: parseFloat(viento),
    descripcion: descripcion,
    icono: icono,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(pronostico => {
    res.json(pronostico);
  })
  .catch(error => {
    res.status(400).send(error);
  });
});

  
  // Ruta PUT para actualizar un pronóstico del clima
  router.put('/update', function(req, res, next) {
    let { id, ciudad, fecha, temperatura, humedad, viento, descripcion, icono } = req.body;
  
    PronosticoClima.update({
      ciudad: ciudad,
      fecha: new Date(fecha),
      temperatura: parseFloat(temperatura),
      humedad: parseFloat(humedad),
      viento: parseFloat(viento),
      descripcion: descripcion,
      icono: icono,
      updatedAt: new Date()
    }, {
      where: {
        id: parseInt(id)  // Asegúrate de que el id sea el correcto
      }
    })
    .then(respuesta => {
      res.json(respuesta);  // Responde con el resultado de la actualización
    })
    .catch(error => {
      res.status(400).send(error);  // Maneja cualquier error que ocurra
    });
  });
  
  // Ruta GET para obtener un pronóstico específico por ciudad
  router.get('/findByCity', function(req, res, next) {
    let { ciudad } = req.query;
  
    PronosticoClima.findOne({
      where: {
        ciudad: ciudad
      }
    })
    .then(pronostico => {
      if (pronostico) {
        res.json(pronostico);
      } else {
        res.status(404).send('Pronóstico no encontrado');
      }
    })
    .catch(error => {
      res.status(400).send(error);
    });
  });
  
  module.exports = router;