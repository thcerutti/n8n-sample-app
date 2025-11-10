const express = require('express');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Dados fake
const users = [
  { id: 1, name: "João Silva", email: "joao@example.com", role: "Developer" },
  { id: 2, name: "Maria Santos", email: "maria@example.com", role: "Designer" },
  { id: 3, name: "Pedro Costa", email: "pedro@example.com", role: "Manager" },
  {
    id: 4,
    name: "Ana Oliveira",
    email: "ana@example.com",
    role: "QA Engineer",
  },
  {
    id: 5,
    name: "Carlos Ferreira",
    email: "carlos@example.com",
    role: "DevOps",
  },
];

const products = [
  { id: 1, name: "Laptop", price: 3500.0, category: "Electronics", stock: 15 },
  { id: 2, name: "Mouse", price: 85.0, category: "Accessories", stock: 50 },
  { id: 3, name: "Keyboard", price: 250.0, category: "Accessories", stock: 30 },
  { id: 4, name: "Monitor", price: 1200.0, category: "Electronics", stock: 20 },
  { id: 5, name: "Headset", price: 180.0, category: "Accessories", stock: 40 },
];

// Rotas
app.get("/", (req, res) => {
  res.json({
    message: "API Backend - n8n Sample App",
    endpoints: [
      "GET /users - Lista todos os usuários",
      "GET /users/:id - Busca usuário por ID",
      "GET /products - Lista todos os produtos",
      "GET /products/:id - Busca produto por ID",
    ],
  });
});

app.get('/home', (req, res) => {
  res.json({ message: 'hello world' });
});

// Rotas de usuários
app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    data: users,
    total: users.length
  });
});

app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json({ success: true, data: user });
  } else {
    res.status(404).json({ success: false, message: 'Usuário não encontrado' });
  }
});

// Rotas de produtos
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    data: products,
    total: products.length
  });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json({ success: true, data: product });
  } else {
    res.status(404).json({ success: false, message: 'Produto não encontrado' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Iniciar o servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend API rodando na porta ${PORT}`);
  console.log(`📡 Endpoints disponíveis:`);
  console.log(`   - http://localhost:${PORT}/`);
  console.log(`   - http://localhost:${PORT}/api/users`);
  console.log(`   - http://localhost:${PORT}/api/products`);
});
