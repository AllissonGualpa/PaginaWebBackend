'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const PronosticoClima = sequelize.define('PronosticoClima', {
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    temperatura: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    humedad: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    viento: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    icono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'pronostico_clima',
    timestamps: true // Si necesitas los campos createdAt y updatedAt
  });

  return PronosticoClima;
};
