const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nombre: 'Allisson Gualpa',
        email: 'allissongualpa@gmail.com',
        contraseña: await bcrypt.hash('123', 10), // Encriptar contraseña
        ciudad_preferida: 'Quito',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Arianna Barrera',
        email: 'ariannabarrera@gmail.com',
        contraseña: await bcrypt.hash('1234', 10), // Encriptar contraseña
        ciudad_preferida: 'Guayaquil',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Anthony Mora',
        email: 'anthonymora@gmail.com',
        contraseña: await bcrypt.hash('12345', 10), // Encriptar contraseña
        ciudad_preferida: 'Cuenca',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};