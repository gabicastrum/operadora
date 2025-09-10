#!/bin/sh

echo "🚀 Iniciando setup automático..."

# Aguardar o banco de dados estar pronto
echo "⏳ Aguardando banco de dados..."
until npx prisma db push --accept-data-loss; do
  echo "💤 Banco não está pronto ainda, aguardando..."
  sleep 5
done

echo "✅ Banco de dados pronto!"

# Aplicar migrações
echo "🔧 Aplicando migrações..."
npx prisma migrate deploy

# Popular banco com dados de teste
echo "🌱 Populando banco com dados de teste..."
npx prisma db seed

# Iniciar aplicação
echo "🎉 Tudo pronto! Iniciando aplicação..."
npm run start:dev
