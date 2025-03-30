'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const RegistroClima = sequelize.define('RegistroClima', {
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
    tableName: 'registros_clima',
    timestamps: false // Si no necesitas los campos createdAt y updatedAt
  });

  return RegistroClima;
};
