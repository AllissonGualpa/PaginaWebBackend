'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("registros_clima", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      ciudad: { type: Sequelize.STRING, allowNull: false },
      temperatura: { type: Sequelize.FLOAT, allowNull: false },
      humedad: { type: Sequelize.INTEGER, allowNull: false },
      viento: { type: Sequelize.FLOAT, allowNull: false },
      descripcion: { type: Sequelize.STRING, allowNull: false },
      icono: { type: Sequelize.STRING, allowNull: false },
      fecha: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("registros_clima");
  },
};
