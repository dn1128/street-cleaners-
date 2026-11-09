const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Street Cleaners funcionando correctamente' });
});

app.get('/api/reportes', (req, res) => {
  res.json([
    { id: 1, ubicacion: 'Sector Hayuelos', tipo: 'Micro-basurero', estado: 'Pendiente' },
    { id: 2, ubicacion: 'Engativá Centro', tipo: 'Escombros', estado: 'En proceso' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

