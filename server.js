const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing JSON
app.use(express.json());

// Rota /home que retorna "hello world"
app.get('/home', (req, res) => {
  res.json({ message: 'hello world' });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}/home`);
});
