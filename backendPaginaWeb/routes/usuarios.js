const express = require('express');
const router = express.Router();
const { Usuario } = require('../models'); // Importa el modelo Usuario
const bcrypt = require('bcrypt'); // Para comparar contraseñas encriptadas

// Endpoint de login
router.post('/login', async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    // Buscar el usuario por email
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const esValida = await bcrypt.compare(contraseña, usuario.contraseña);

    if (!esValida) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Login exitoso
    return res.status(200).json({ mensaje: 'Login exitoso', usuario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error en el servidor' });
  }
});

module.exports = router;