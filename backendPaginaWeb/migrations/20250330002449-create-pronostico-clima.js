'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pronostico_clima', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ciudad: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      temperatura: {
        type: Sequelize.FLOAT
      },
      humedad: {
        type: Sequelize.FLOAT
      },
      viento: {
        type: Sequelize.FLOAT
      },
      descripcion: {
        type: Sequelize.STRING
      },
      icono: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pronostico_clima');
  }
};