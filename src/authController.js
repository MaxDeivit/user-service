const admin = require('./firebase');

// Registro de usuarios
exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({ email, password });
    res.status(201).json({ message: 'User registered successfully', uid: user.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Inicio de sesión (token de prueba)
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customToken = await admin.auth().createCustomToken(email);
    res.status(200).json({ token: customToken });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
