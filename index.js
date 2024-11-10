// index.js
require('dotenv').config();
const express = require('express');
const app = express();

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello, Railway!');
});

// Configuração da porta com fallback para 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
