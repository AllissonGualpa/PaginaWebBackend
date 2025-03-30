var express = require('express');
var router = express.Router();
const {Sequelize, Op} = require('sequelize');
const { RegistroClima } = require("../../models");

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


// Ruta POST para guardar los datos del clima
router.post('/save', function(req, res, next) {
    let { ciudad, temperatura, humedad, viento, descripcion, icono } = req.body;
    
    RegistroClima.create({
      ciudad: ciudad,
      temperatura: parseFloat(temperatura),
      humedad: parseFloat(humedad),
      viento: parseFloat(viento),
      descripcion: descripcion,
      icono: icono,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(clima => {
      res.json(clima);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

// Ruta PUT para actualizar un registro del clima
router.put('/update', function(req, res, next) {
    let { id, ciudad, temperatura, humedad, viento, descripcion, icono } = req.body;
  
    // Actualiza el registro de clima correspondiente al id
    RegistroClima.update({
      ciudad: ciudad,
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

  router.get('/save', function(req, res, next) {
    let { ciudad, temperatura, humedad, viento, descripcion, icono } = req.query;
    
    RegistroClima.create({
      ciudad: ciudad,
      temperatura: parseFloat(temperatura),
      humedad: parseFloat(humedad),
      viento: parseFloat(viento),
      descripcion: descripcion,
      icono: icono,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(clima => {
      res.json(clima);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

module.exports = router;