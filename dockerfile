# Dockerfile

# Estágio de desenvolvimento
FROM node:20-alpine AS development

WORKDIR /usr/src/app

# Copia package.json e package-lock.json para aproveitar o cache
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o schema do Prisma
COPY prisma ./prisma/

# 💡 AQUI ESTÁ A CORREÇÃO: Geramos o Prisma Client
# Isso precisa acontecer depois do npm install e depois de copiar o schema
RUN npx prisma generate

# Copia o resto do código da aplicação
COPY . .

# Expõe a porta que a aplicação vai usar
EXPOSE 3000

# Comando padrão para rodar a aplicação em modo de desenvolvimento
CMD [ "npm", "run", "start:dev" ]