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

## Estrutura do projeto

- `server.js` - Arquivo principal da aplicação
- `package.json` - Configurações e dependências do projeto
