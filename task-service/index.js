const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3004;

app.use(cors());
app.use(express.json());

// Datos de tareas
const tasks = [
  { id: 1, userId: 1, title: 'Corregir error de validación en formulario', status: 'completed' },
  { id: 2, userId: 1, title: 'Actualizar dependencias de express', status: 'pending' },
  { id: 3, userId: 2, title: 'Crear documentación de la API', status: 'pending' },
  { id: 4, userId: 2, title: 'Revisar logs del servidor de staging', status: 'completed' },
  { id: 5, userId: 3, title: 'Sincronizar base de datos local', status: 'pending' }
];

// Obtener tareas de un usuario con datos del usuario desde el User-Service
app.get('/tasks/user/:userId', async (req, res) => {
  const userId = req.params.userId;
  const userTasks = tasks.filter(t => t.userId === parseInt(userId));
  
  try {
    // Comunicación sincrónica entre microservicios via HTTP
    const userResponse = await axios.get(`http://localhost:3003/users/${userId}`);
    const userData = userResponse.data;

    res.json({
      user: userData,
      tasks: userTasks
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos del usuario' });
  }
});

app.listen(PORT, () => {
  console.log(`Task Service running on port ${PORT}`);
});