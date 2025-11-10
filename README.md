# 📊 n8n Sample App# n8n Sample App



Aplicação full-stack com backend (API REST) e frontend simples, ambos rodando em containers Docker separados.[![CircleCI](https://circleci.com/gh/thcerutti/n8n-sample-app.svg?style=svg)](https://circleci.com/gh/thcerutti/n8n-sample-app)



## 🏗️ ArquiteturaAplicação de demonstração com arquitetura de microsserviços usando Docker Compose.



- **Backend**: API REST em Node.js/Express servindo dados fake## 🏗️ Arquitetura

- **Frontend**: Interface web simples consumindo a API

- **Docker Compose**: Orquestração dos dois serviçosA aplicação consiste em 2 serviços:



## 🚀 Como Executar- **Backend (API)**: Node.js + Express servindo dados fake em `http://localhost:3000`

- **Frontend**: Interface HTML/CSS/JS servida por Nginx em `http://localhost:8080`

### Pré-requisitos

- Docker e Docker Compose instalados## 📦 Estrutura do Projeto



### Iniciar a aplicação```

n8n-sample-app/

```bash├── backend/

docker compose up --build -d│   ├── server.js           # API com rotas de usuários e produtos

```│   ├── package.json

│   └── Dockerfile

### Verificar status dos containers├── frontend/

│   ├── index.html          # Interface do dashboard

```bash│   ├── styles.css          # Estilos

docker compose ps│   ├── app.js              # Lógica de consumo da API

```│   ├── nginx.conf          # Configuração do Nginx

│   └── Dockerfile

### Ver logs└── docker-compose.yml      # Orquestração dos serviços

```

```bash

# Logs de ambos os serviços## 🚀 Como Executar

docker compose logs -f

### Pré-requisitos

# Logs apenas do backend- Docker

docker compose logs -f backend- Docker Compose



# Logs apenas do frontend### Iniciar a aplicação

docker compose logs -f frontend

``````bash

docker-compose up -d --build

### Parar a aplicação```



```bash### Acessar os serviços

docker compose down

```- **Frontend**: http://localhost:8080

- **Backend API**: http://localhost:3000

## 🌐 Endpoints

### Verificar status

### Frontend

- **URL**: http://localhost:8080```bash

- Interface web com duas abas: Usuários e Produtosdocker-compose ps

```

### Backend API

### Ver logs

#### Health Check

- `GET http://localhost:3000/health````bash

# Todos os serviços

#### Rota Originaldocker-compose logs -f

- `GET http://localhost:3000/home` - Retorna "hello world"

# Backend apenas

#### API de Usuáriosdocker-compose logs -f backend

- `GET http://localhost:3000/api/users` - Lista todos os usuários

- `GET http://localhost:3000/api/users/:id` - Obtém usuário por ID# Frontend apenas

docker-compose logs -f frontend

#### API de Produtos```

- `GET http://localhost:3000/api/products` - Lista todos os produtos

- `GET http://localhost:3000/api/products/:id` - Obtém produto por ID### Parar a aplicação



## 📁 Estrutura do Projeto```bash

docker-compose down

``````

.

├── docker-compose.yml          # Orquestração dos serviços## 📡 Endpoints da API

├── backend/

│   ├── Dockerfile             # Imagem do backend### Usuários

│   ├── package.json- `GET /api/users` - Lista todos os usuários

│   ├── server.js              # API REST com dados fake- `GET /api/users/:id` - Busca usuário por ID

│   └── .dockerignore

└── frontend/### Produtos

    ├── Dockerfile             # Imagem do frontend- `GET /api/products` - Lista todos os produtos

    ├── nginx.conf             # Configuração do Nginx- `GET /api/products/:id` - Busca produto por ID

    ├── index.html             # Interface web

    ├── app.js                 # Lógica do frontend### Health Check

    └── styles.css             # Estilos- `GET /health` - Status do backend

```- `GET /home` - Rota legacy (compatibilidade)



## 🧪 Testando a API## 🎨 Features do Frontend



```bash- Dashboard interativo com tabs

# Testar usuários- Visualização de usuários e produtos

curl http://localhost:3000/api/users- Status do backend em tempo real

- Design responsivo

# Testar produtos- Atualização de dados sob demanda

curl http://localhost:3000/api/products

## 🛠️ Desenvolvimento Local

# Testar health check

curl http://localhost:3000/health### Backend

```

```bash

## 🔧 Desenvolvimento Localcd backend

npm install

### Backendnpm run dev

```bash```

cd backend

npm install### Frontend

npm start

``````bash

cd frontend

### Frontend# Abra index.html no navegador ou use um servidor HTTP

Abra `frontend/index.html` diretamente no navegador ou use um servidor HTTP simples.python3 -m http.server 8080

```

## 📝 Dados Fake

## 🐳 Docker

### Usuários

- 5 usuários com ID, nome, email, cargo e statusOs serviços estão configurados em uma rede bridge (`app-network`) permitindo comunicação interna entre containers.



### Produtos### Rebuild dos containers

- 6 produtos com ID, nome, preço, categoria e estoque

```bash

## 🐳 Dockerdocker-compose up -d --build

```

### Portas

- **Frontend**: 8080 → 80 (Nginx)### Remover tudo (containers, volumes, imagens)

- **Backend**: 3000 → 3000 (Node.js)

```bash

### Networkdocker-compose down -v --rmi all

Os containers se comunicam através da rede `app-network` (bridge).```



### Health Checks## 📝 Notas

Ambos os serviços possuem health checks configurados para monitoramento.

- O backend usa CORS para permitir requisições do frontend
- Health checks configurados para monitoramento
- Frontend usa Nginx alpine para menor footprint
- Backend usa Node.js 18 alpine

## 🔧 Customização

Para adicionar mais dados fake, edite o arquivo `backend/server.js` e adicione novos arrays ou rotas.

Para personalizar o frontend, edite os arquivos em `frontend/`:
- `index.html` - Estrutura
- `styles.css` - Estilos
- `app.js` - Lógica

## CI/CD com CircleCI

Este projeto está configurado para usar CircleCI para integração e deploy contínuo.

### Pipeline

A pipeline do CircleCI inclui jobs de:
- Test - Testes e verificações
- Build Docker - Construção das imagens
- Deploy - Deploy dos serviços

### Configuração

1. Conecte seu repositório ao CircleCI
2. Configure as variáveis de ambiente necessárias
3. A pipeline será executada automaticamente em push

## Instalação

1. Instale as dependências:
```bash
npm install
```

## Como usar

1. Para iniciar o servidor:
```bash
npm start
```

2. Para desenvolvimento com auto-reload:
```bash
npm run dev
```

3. Acesse a rota:
```
GET http://localhost:3000/home
```

A resposta será:
```json
{
  "message": "hello world"
}
```

## Docker

### Usando Docker Compose (Recomendado)

1. Construir e iniciar a aplicação:
```bash
docker-compose up --build
```

2. Para executar em background:
```bash
docker-compose up -d --build
```

3. Para parar a aplicação:
```bash
docker-compose down
```

### Usando Docker diretamente

1. Construir a imagem:
```bash
docker build -t n8n-sample-app .
```

2. Executar o container:
```bash
docker run -p 3000:3000 n8n-sample-app
```

## Testes

1. Executar testes básicos:
```bash
npm test
```

2. Verificar sintaxe:
```bash
npm run lint
```

3. Health check da aplicação:
```bash
npm run health-check
```

## CI/CD com CircleCI

Este projeto está configurado para usar CircleCI para integração e deploy contínuo.

### Pipeline

A pipeline do CircleCI inclui 3 jobs principais:

1. **Test** - Executa testes básicos e verificações de sintaxe
2. **Build Docker** - Constrói e testa a imagem Docker
3. **Deploy** - Realiza o deploy (atualmente simulado)

### Configuração

1. Conecte seu repositório ao CircleCI
2. Configure as variáveis de ambiente necessárias (veja `.circleci/environment-variables.md`)
3. A pipeline será executada automaticamente em push para `main` e `develop`

### Variáveis de Ambiente

Configure as seguintes variáveis no CircleCI (opcional):
- `DOCKER_USERNAME` - Para push no Docker Hub
- `DOCKER_PASSWORD` - Token do Docker Hub
- Outras variáveis conforme necessário para deploy

## Estrutura do projeto

- `server.js` - Arquivo principal da aplicação
- `package.json` - Configurações e dependências do projeto
- `test/` - Diretório com testes básicos
- `Dockerfile` - Configuração para construir a imagem Docker
- `docker-compose.yml` - Configuração para orquestração de containers
- `.dockerignore` - Arquivos a serem ignorados no build Docker
- `.circleci/` - Configurações do CircleCI
  - `config.yml` - Pipeline de CI/CD
  - `environment-variables.md` - Documentação das variáveis de ambiente
