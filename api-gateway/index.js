const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = 3000;

app.use(cors());

// Redirección de rutas a los microservicios correspondientes
app.use('/users', createProxyMiddleware({ 
  target: 'http://localhost:3003', 
  changeOrigin: true 
}));

app.use('/tasks', createProxyMiddleware({ 
  target: 'http://localhost:3004', 
  changeOrigin: true 
}));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});