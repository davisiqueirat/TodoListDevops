# Use a imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm ci --only=production

# Copia todo o código da aplicação
COPY . .

# Expõe a porta que a aplicação vai usar
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]