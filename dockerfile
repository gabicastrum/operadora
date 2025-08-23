FROM node:20-alpine AS development

WORKDIR /usr/src/app

# Copia package.json e package-lock.json para aproveitar o cache
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o schema do Prisma
COPY prisma ./prisma/

# precisa acontecer depois do npm install e depois de copiar o schema
RUN npx prisma generate

# Copia o resto do código da aplicação
COPY . .

# Copia e torna executável o script de inicialização
COPY start.sh ./
RUN chmod +x start.sh

# Expõe a porta que a aplicação vai usar
EXPOSE 3000

# Comando que executa setup automático + aplicação
CMD ["./start.sh"]