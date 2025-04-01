'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // Define relaciones aquí si es necesario
    }
  }
  Usuario.init({
    nombre: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    email: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true 
    },
    contraseña: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    ciudad_preferida: { 
      type: DataTypes.STRING, 
      allowNull: true 
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: true
  });
  return Usuario;
};