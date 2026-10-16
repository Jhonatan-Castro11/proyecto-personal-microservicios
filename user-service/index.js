const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());

// Datos de usuarios
const users = [
  { id: 1, name: 'Carlos Ruiz', email: 'c.ruiz88@gmail.com' },
  { id: 2, name: 'Ana Martinez', email: 'ana.mtz.dev@outlook.com' },
  { id: 3, name: 'Luis Garcia', email: 'lgarcia_ti@yahoo.com' }
];

// Obtener usuario por ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.json(user);
});

// Obtener todos los usuarios
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});