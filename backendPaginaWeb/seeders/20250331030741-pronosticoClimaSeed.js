'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pronostico_clima', [
      {ciudad: 'Quito', fecha: new Date('2025-04-17'), temperatura: 12.0, humedad: 85, viento: 2.0, descripcion: 'Lluvia ligera', icono: '09d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Guayaquil', fecha: new Date('2025-04-18'), temperatura: 30.0, humedad: 80, viento: 3.5, descripcion: 'Soleado', icono: '01d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Loja', fecha: new Date('2025-04-19'), temperatura: 15.0, humedad: 70, viento: 2.5, descripcion: 'Nublado', icono: '04d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Cuenca', fecha: new Date('2025-04-20'), temperatura: 14.0, humedad: 75, viento: 3.0, descripcion: 'Lluvia ligera', icono: '09d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Pekín',fecha: new Date('2025-04-04'),temperatura: 15.0,humedad: 50,viento: 3.2,descripcion: 'Nublado',icono: '04d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Tokio',fecha: new Date('2025-04-05'),temperatura: 17.0,humedad: 55,viento: 3.5,descripcion: 'Parcialmente nublado',icono: '02d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Seúl',fecha: new Date('2025-04-06'),temperatura: 18.0,humedad: 60,viento: 4.0,descripcion: 'Soleado',icono: '01d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Bangkok',fecha: new Date('2025-04-07'),temperatura: 30.0,humedad: 70,viento: 2.5,descripcion: 'Lluvia ligera',icono: '09d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Nueva Delhi',fecha: new Date('2025-04-08'),temperatura: 35.0,humedad: 40,viento: 3.0,descripcion: 'Soleado',icono: '01d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Sídney',fecha: new Date('2025-04-09'),temperatura: 22.0,humedad: 65,viento: 4.0,descripcion: 'Parcialmente nublado',icono: '02d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Melbourne',fecha: new Date('2025-04-10'),temperatura: 20.0,humedad: 60,viento: 3.5,descripcion: 'Soleado',icono: '01d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Auckland',fecha: new Date('2025-04-11'),temperatura: 18.0,humedad: 75,viento: 4.0,descripcion: 'Lluvia ligera',icono: '09d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Dubái',fecha: new Date('2025-04-12'),temperatura: 38.0,humedad: 30,viento: 2.5,descripcion: 'Soleado',icono: '01d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Río de Janeiro',fecha: new Date('2025-04-13'),temperatura: 28.0,humedad: 80,viento: 3.0,descripcion: 'Nublado',icono: '04d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Buenos Aires',fecha: new Date('2025-04-14'),temperatura: 25.0,humedad: 70,viento: 3.5,descripcion: 'Soleado',icono: '01d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Lima',fecha: new Date('2025-04-15'),temperatura: 19.0,humedad: 80,viento: 2.5,descripcion: 'Niebla',icono: '50d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Bogotá',fecha: new Date('2025-04-16'),temperatura: 16.0,humedad: 75,viento: 3.0,descripcion: 'Nublado',icono: '04d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Berlín',fecha: new Date('2025-04-17'),temperatura: 14.0,humedad: 70,viento: 4.0,descripcion: 'Nublado',icono: '04d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Londres',fecha: new Date('2025-04-18'),temperatura: 12.0,humedad: 80,viento: 3.5,descripcion: 'Lluvia ligera',icono: '09d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'París',fecha: new Date('2025-04-19'),temperatura: 15.0,humedad: 65,viento: 2.5,descripcion: 'Soleado',icono: '01d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Roma',fecha: new Date('2025-04-20'),temperatura: 21.0,humedad: 60,viento: 3.0,descripcion: 'Parcialmente nublado',icono: '02d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Madrid',fecha: new Date('2025-04-21'),temperatura: 22.0,humedad: 55,viento: 3.5,descripcion: 'Soleado',icono: '01d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Lisboa',fecha: new Date('2025-04-22'),temperatura: 20.0,humedad: 60,viento: 2.5,descripcion: 'Nublado',icono: '04d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Ámsterdam',fecha: new Date('2025-04-23'),temperatura: 17.0,humedad: 70,viento: 4.0,descripcion: 'Lluvia ligera',icono: '09d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Bruselas',fecha: new Date('2025-04-24'),temperatura: 14.0,humedad: 75,viento: 3.0,descripcion: 'Parcialmente nublado',icono: '02d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Copenhague',fecha: new Date('2025-04-25'),temperatura: 13.0,humedad: 80,viento: 2.5,descripcion: 'Niebla',icono: '50d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Estocolmo',fecha: new Date('2025-04-26'),temperatura: 11.0,humedad: 85,viento: 3.5,descripcion: 'Lluvia ligera',icono: '09d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Oslo',fecha: new Date('2025-04-27'),temperatura: 10.0,humedad: 90,viento: 4.0,descripcion: 'Nublado',icono: '04d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Helsinki',fecha: new Date('2025-04-28'),temperatura: 9.0,humedad: 95,viento: 3.0,descripcion: 'Soleado',icono: '01d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Reikiavik',fecha: new Date('2025-04-29'),temperatura: 8.0,humedad: 85,viento: 2.0,descripcion: 'Parcialmente nublado',icono: '02d',createdAt: new Date(),updatedAt: new Date()},
      {ciudad: 'Manta', fecha: new Date('2025-04-30'), temperatura: 25.0, humedad: 80, viento: 3.0, descripcion: 'Soleado', icono: '01d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Ambato', fecha: new Date('2025-05-01'), temperatura: 20.0, humedad: 75, viento: 2.5, descripcion: 'Nublado', icono: '04d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Machala', fecha: new Date('2025-05-02'), temperatura: 28.0, humedad: 85, viento: 3.5, descripcion: 'Lluvia ligera', icono: '09d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Ibarra', fecha: new Date('2025-05-03'), temperatura: 18.0, humedad: 70, viento: 2.0, descripcion: 'Soleado', icono: '01d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Esmeraldas', fecha: new Date('2025-05-04'), temperatura: 26.0, humedad: 90, viento: 3.0, descripcion: 'Nublado', icono: '04d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Tena', fecha: new Date('2025-05-05'), temperatura: 24.0, humedad: 80, viento: 2.5, descripcion: 'Lluvia ligera', icono: '09d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Tulcán', fecha: new Date('2025-05-06'), temperatura: 16.0, humedad: 75, viento: 3.5, descripcion: 'Soleado', icono: '01d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Moscú', fecha: new Date('2025-05-07'), temperatura: 10.0, humedad: 85, viento: 4.0, descripcion: 'Nublado', icono: '04d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'San Petersburgo', fecha: new Date('2025-05-08'), temperatura: 9.0, humedad: 90, viento: 3.5, descripcion: 'Lluvia ligera', icono: '09d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Nairobi', fecha: new Date('2025-05-09'), temperatura: 20.0, humedad: 70, viento: 2.5, descripcion: 'Soleado', icono: '01d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'El Cairo', fecha: new Date('2025-05-10'), temperatura: 35.0, humedad: 40, viento: 3.0, descripcion: 'Soleado', icono: '01d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Lagos', fecha: new Date('2025-05-11'), temperatura: 30.0, humedad: 80, viento: 3.5, descripcion: 'Nublado', icono: '04d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Brasilia', fecha: new Date('2025-05-12'), temperatura: 26.0, humedad: 75, viento: 2.5, descripcion: 'Soleado', icono: '01d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Santiago', fecha: new Date('2025-05-13'), temperatura: 22.0, humedad: 65, viento: 3.0, descripcion: 'Parcialmente nublado', icono: '02d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'Caracas', fecha: new Date('2025-05-14'), temperatura: 28.0, humedad: 70, viento: 3.5, descripcion: 'Soleado', icono: '01d', createdAt: new Date(), updatedAt: new Date() },
      {ciudad: 'La Paz', fecha: new Date('2025-05-15'), temperatura: 15.0, humedad: 80, viento: 2.0, descripcion: 'Nublado', icono: '04d', createdAt: new Date(), updatedAt: new Date() },  
      {ciudad: 'Asunción', fecha: new Date('2025-05-16'), temperatura: 27.0, humedad: 75, viento: 3.0, descripcion: 'Lluvia ligera', icono: '09d', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pronostico_clima', null, {});
  }
};