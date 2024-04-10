const express = require('express');

// Crea una aplicación Express
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  next();
});


// Datos de ejemplo (en lugar de una base de datos real)
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];

// Ruta para obtener todos los usuarios
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Ruta para obtener un usuario por su ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  res.json(user);
});

// Ruta para crear un nuevo usuario
app.post('/api/users', (req, res) => {
  // Aquí podrías procesar los datos del usuario enviado en el cuerpo de la solicitud
  // Por simplicidad, no lo implementaré aquí

  // Simplemente devolveremos un mensaje de éxito
  res.status(201).json({ message: 'Usuario creado correctamente' });
});

// Inicia el servidor
app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});