FROM node:18-alpine

WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o código
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Inicia o servidor de desenvolvimento
CMD ["npm", "start"]