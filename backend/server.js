const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Dados fake de usuários
const users = [
  { id: 1, name: 'João Silva', email: 'joao@example.com', role: 'Developer', status: 'active' },
  { id: 2, name: 'Maria Santos', email: 'maria@example.com', role: 'Designer', status: 'active' },
  { id: 3, name: 'Pedro Oliveira', email: 'pedro@example.com', role: 'Manager', status: 'active' },
  { id: 4, name: 'Ana Costa', email: 'ana@example.com', role: 'Developer', status: 'inactive' },
  { id: 5, name: 'Carlos Souza', email: 'carlos@example.com', role: 'QA', status: 'active' }
];

// Dados fake de produtos
const products = [
  { id: 1, name: 'Notebook Pro', price: 4500.00, category: 'Eletrônicos', stock: 15 },
  { id: 2, name: 'Mouse Wireless', price: 89.90, category: 'Acessórios', stock: 50 },
  { id: 3, name: 'Teclado Mecânico', price: 350.00, category: 'Acessórios', stock: 30 },
  { id: 4, name: 'Monitor 27"', price: 1200.00, category: 'Eletrônicos', stock: 10 },
  { id: 5, name: 'Webcam HD', price: 250.00, category: 'Eletrônicos', stock: 25 },
  { id: 6, name: 'Headset Gamer', price: 299.00, category: 'Acessórios', stock: 20 }
];

// Rota de health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Rota /home que retorna "hello world"
app.get('/home', (req, res) => {
  res.json({ message: 'hello world' });
});

// API: Listar todos os usuários
app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

// API: Obter usuário por ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json({ success: true, data: user });
  } else {
    res.status(404).json({ success: false, message: 'Usuário não encontrado' });
  }
});

// API: Listar todos os produtos
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    data: products,
    count: products.length
  });
});

// API: Obter produto por ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json({ success: true, data: product });
  } else {
    res.status(404).json({ success: false, message: 'Produto não encontrado' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍 Endpoints disponíveis:`);
  console.log(`   GET /health - Health check`);
  console.log(`   GET /home - Hello world`);
  console.log(`   GET /api/users - Lista de usuários`);
  console.log(`   GET /api/users/:id - Usuário por ID`);
  console.log(`   GET /api/products - Lista de produtos`);
  console.log(`   GET /api/products/:id - Produto por ID`);
});
