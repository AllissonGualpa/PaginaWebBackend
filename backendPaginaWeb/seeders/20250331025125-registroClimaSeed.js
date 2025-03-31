'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('registros_clima', [
      {
        ciudad: 'Quito',
        temperatura: 14.0,
        humedad: 88,
        viento: 2.3,
        descripcion: 'Lluvia ligera',
        icono: '09d',
        fecha: new Date()
    },
    {
        ciudad: 'Guayaquil',
        temperatura: 29.0,
        humedad: 77,
        viento: 4.0,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Cuenca',
        temperatura: 16.0,
        humedad: 80,
        viento: 3.0,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Manta',
        temperatura: 27.5,
        humedad: 75,
        viento: 4.2,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'Ambato',
        temperatura: 13.5,
        humedad: 85,
        viento: 2.5,
        descripcion: 'Llovizna',
        icono: '09d',
        fecha: new Date()
    },
    {
        ciudad: 'Loja',
        temperatura: 15.0,
        humedad: 78,
        viento: 3.1,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Riobamba',
        temperatura: 12.0,
        humedad: 82,
        viento: 3.0,
        descripcion: 'Lluvia ligera',
        icono: '09d',
        fecha: new Date()
    },
    {
        ciudad: 'Barcelona',
        temperatura: 21.0,
        humedad: 65,
        viento: 3.5,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Roma',
        temperatura: 19.5,
        humedad: 70,
        viento: 3.0,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'Ámsterdam',
        temperatura: 11.0,
        humedad: 85,
        viento: 5.0,
        descripcion: 'Lluvia ligera',
        icono: '09d',
        fecha: new Date()
    },
    {
        ciudad: 'Berlín',
        temperatura: 13.0,
        humedad: 80,
        viento: 4.5,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Pekín',
        temperatura: 17.0,
        humedad: 50,
        viento: 3.8,
        descripcion: 'Despejado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Seúl',
        temperatura: 14.5,
        humedad: 67,
        viento: 3.2,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'Moscú',
        temperatura: 6.0,
        humedad: 75,
        viento: 4.0,
        descripcion: 'Nieve ligera',
        icono: '13d',
        fecha: new Date()
    },
    {
        ciudad: 'Estambul',
        temperatura: 18.0,
        humedad: 72,
        viento: 3.7,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Dubai',
        temperatura: 35.0,
        humedad: 40,
        viento: 2.5,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Nueva Delhi',
        temperatura: 29.0,
        humedad: 55,
        viento: 3.5,
        descripcion: 'Humedad alta',
        icono: '50d',
        fecha: new Date()
    },
    {
        ciudad: 'Johannesburgo',
        temperatura: 23.0,
        humedad: 50,
        viento: 4.0,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Melbourne',
        temperatura: 20.0,
        humedad: 68,
        viento: 3.5,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'Bangkok',
        temperatura: 31.0,
        humedad: 78,
        viento: 2.8,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Oslo',
        temperatura: 5.0,
        humedad: 80,
        viento: 3.2,
        descripcion: 'Nieve ligera',
        icono: '13d',
        fecha: new Date()
    },
    {
        ciudad: 'Helsinki',
        temperatura: 4.0,
        humedad: 85,
        viento: 4.0,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Copenhague',
        temperatura: 9.0,
        humedad: 78,
        viento: 3.5,
        descripcion: 'Lluvia ligera',
        icono: '09d',
        fecha: new Date()
    },
    {
        ciudad: 'Lisboa',
        temperatura: 22.0,
        humedad: 65,
        viento: 3.0,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Atenas',
        temperatura: 24.0,
        humedad: 60,
        viento: 4.0,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'Dublín',
        temperatura: 12.0,
        humedad: 85,
        viento: 4.2,
        descripcion: 'Lluvia ligera',
        icono: '09d',
        fecha: new Date()
    },
    {
        ciudad: 'Reikiavik',
        temperatura: 2.0,
        humedad: 90,
        viento: 5.0,
        descripcion: 'Nieve moderada',
        icono: '13d',
        fecha: new Date()
    },
    {
        ciudad: 'El Cairo',
        temperatura: 30.0,
        humedad: 40,
        viento: 2.5,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Nairobi',
        temperatura: 25.0,
        humedad: 70,
        viento: 3.2,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'Lagos',
        temperatura: 28.0,
        humedad: 80,
        viento: 2.8,
        descripcion: 'Lluvia ligera',
        icono: '09d',
        fecha: new Date()
    },
    {
        ciudad: 'Buenos Aires',
        temperatura: 19.0,
        humedad: 75,
        viento: 3.0,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Montevideo',
        temperatura: 18.5,
        humedad: 78,
        viento: 3.5,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'La Paz',
        temperatura: 11.0,
        humedad: 65,
        viento: 4.0,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Asunción',
        temperatura: 26.0,
        humedad: 70,
        viento: 3.8,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'San Juan',
        temperatura: 30.0,
        humedad: 75,
        viento: 4.0,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'San Salvador',
        temperatura: 29.0,
        humedad: 72,
        viento: 3.2,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'Managua',
        temperatura: 28.0,
        humedad: 80,
        viento: 2.5,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Panamá',
        temperatura: 30.0,
        humedad: 85,
        viento: 3.0,
        descripcion: 'Lluvia moderada',
        icono: '09d',
        fecha: new Date()
    },
    {
        ciudad: 'San José',
        temperatura: 27.0,
        humedad: 78,
        viento: 3.0,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'Pekín',
        temperatura: 15.0,
        humedad: 50,
        viento: 3.2,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Seúl',
        temperatura: 17.0,
        humedad: 55,
        viento: 3.5,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'Bangkok',
        temperatura: 32.0,
        humedad: 75,
        viento: 2.8,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Delhi',
        temperatura: 35.0,
        humedad: 60,
        viento: 3.0,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Hong Kong',
        temperatura: 29.0,
        humedad: 80,
        viento: 3.2,
        descripcion: 'Lluvia ligera',
        icono: '09d',
        fecha: new Date()
    },
    {
        ciudad: 'Singapur',
        temperatura: 30.0,
        humedad: 85,
        viento: 3.5,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },

    // Europa
    {
        ciudad: 'Berlín',
        temperatura: 14.0,
        humedad: 70,
        viento: 4.0,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Roma',
        temperatura: 21.0,
        humedad: 65,
        viento: 3.0,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Ámsterdam',
        temperatura: 13.0,
        humedad: 75,
        viento: 4.5,
        descripcion: 'Lluvia moderada',
        icono: '09d',
        fecha: new Date()
    },
    {
        ciudad: 'Viena',
        temperatura: 16.0,
        humedad: 60,
        viento: 3.2,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'Praga',
        temperatura: 15.0,
        humedad: 68,
        viento: 3.8,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Estocolmo',
        temperatura: 10.0,
        humedad: 80,
        viento: 4.0,
        descripcion: 'Lluvia ligera',
        icono: '09d',
        fecha: new Date()
    },

    // Oceanía
    {
        ciudad: 'Melbourne',
        temperatura: 20.0,
        humedad: 65,
        viento: 3.5,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'Auckland',
        temperatura: 18.0,
        humedad: 75,
        viento: 4.0,
        descripcion: 'Lluvia ligera',
        icono: '09d',
        fecha: new Date()
    },
    {
        ciudad: 'Perth',
        temperatura: 28.0,
        humedad: 55,
        viento: 3.0,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },

    // Medio Oriente
    {
        ciudad: 'Dubái',
        temperatura: 38.0,
        humedad: 30,
        viento: 2.5,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Estambul',
        temperatura: 22.0,
        humedad: 65,
        viento: 3.0,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    },
    {
        ciudad: 'Teherán',
        temperatura: 27.0,
        humedad: 40,
        viento: 3.5,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },

    // Ciudades adicionales de América
    {
        ciudad: 'Brasilia',
        temperatura: 26.0,
        humedad: 60,
        viento: 3.2,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Bogotá',
        temperatura: 16.0,
        humedad: 75,
        viento: 3.0,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Lima',
        temperatura: 19.0,
        humedad: 80,
        viento: 2.5,
        descripcion: 'Niebla',
        icono: '50d',
        fecha: new Date()
    },

    // Ciudades de Ecuador
    {
        ciudad: 'Cuenca',
        temperatura: 14.0,
        humedad: 82,
        viento: 3.0,
        descripcion: 'Lluvia ligera',
        icono: '09d',
        fecha: new Date()
    },
    {
        ciudad: 'Manta',
        temperatura: 26.0,
        humedad: 75,
        viento: 3.8,
        descripcion: 'Soleado',
        icono: '01d',
        fecha: new Date()
    },
    {
        ciudad: 'Ambato',
        temperatura: 13.0,
        humedad: 80,
        viento: 2.8,
        descripcion: 'Nublado',
        icono: '04d',
        fecha: new Date()
    },
    {
        ciudad: 'Esmeraldas',
        temperatura: 28.0,
        humedad: 78,
        viento: 3.5,
        descripcion: 'Parcialmente nublado',
        icono: '02d',
        fecha: new Date()
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('registros_clima', null, {});
  }
};