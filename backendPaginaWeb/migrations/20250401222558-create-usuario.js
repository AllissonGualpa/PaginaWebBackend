'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
      },
      nombre: { 
        type: Sequelize.STRING, 
        allowNull: false 
      },
      email: { 
        type: Sequelize.STRING, 
        allowNull: false, 
        unique: true 
      },
      contraseña: { 
        type: Sequelize.STRING, 
        allowNull: false 
      },
      ciudad_preferida: { 
        type: Sequelize.STRING, 
        allowNull: true 
      },
      createdAt: { 
        type: Sequelize.DATE, 
        allowNull: false, 
        defaultValue: Sequelize.NOW 
      },
      updatedAt: { 
        type: Sequelize.DATE, 
        allowNull: false, 
        defaultValue: Sequelize.NOW 
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('usuarios');
  },
};