# Express Simple API

[![CircleCI](https://circleci.com/gh/thcerutti/n8n-sample-app.svg?style=svg)](https://circleci.com/gh/thcerutti/n8n-sample-app)

Uma API simples construída com Express.js que possui uma rota `/home` que retorna "hello world".

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
