# Express Simple API

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

## Estrutura do projeto

- `server.js` - Arquivo principal da aplicação
- `package.json` - Configurações e dependências do projeto
- `Dockerfile` - Configuração para construir a imagem Docker
- `docker-compose.yml` - Configuração para orquestração de containers
- `.dockerignore` - Arquivos a serem ignorados no build Docker
