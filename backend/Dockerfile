# Use uma imagem oficial do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package*.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install --omit=dev

# Copia o resto dos arquivos da aplicação
COPY . .

# Cria um usuário não-root para executar a aplicação
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Muda a propriedade dos arquivos para o usuário nodejs
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expõe a porta que a aplicação usa
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD ["npm", "start"]
