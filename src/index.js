const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authController = require('./authController');

const app = express();
app.use(express.json());
app.use(cors());

// Rutas de autenticación
app.post('/register', authController.register);
app.post('/login', authController.login);

// Iniciar el servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`User service running on port ${PORT}`));
