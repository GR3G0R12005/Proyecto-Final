const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hola Mundo' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
