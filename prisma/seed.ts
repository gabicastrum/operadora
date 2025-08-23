import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seeding do banco de dados...');

  await prisma.assinatura.deleteMany();
  await prisma.cliente.deleteMany();
  await prisma.plano.deleteMany();

  console.log('🗑️  Dados anteriores removidos');

  const planos = await Promise.all([
    prisma.plano.create({
      data: {
        nome: 'Plano Básico',
        custoMensal: '49.90',
        descricao: 'Internet 100MB + TV básica',
      },
    }),
    prisma.plano.create({
      data: {
        nome: 'Plano Premium',
        custoMensal: '89.90',
        descricao: 'Internet 300MB + TV premium + telefone',
      },
    }),
    prisma.plano.create({
      data: {
        nome: 'Plano Ultra',
        custoMensal: '129.90',
        descricao: 'Internet 500MB + TV completa + telefone + streaming',
      },
    }),
    prisma.plano.create({
      data: {
        nome: 'Plano Empresarial',
        custoMensal: '199.90',
        descricao: 'Internet 1GB + suporte 24h + IP fixo',
      },
    }),
    prisma.plano.create({
      data: {
        nome: 'Plano Estudante',
        custoMensal: '29.90',
        descricao: 'Internet 50MB especial para estudantes',
      },
    }),
  ]);

  console.log(`✅ ${planos.length} planos criados`);

  // Criar Clientes (Nenhuma alteração necessária aqui)
  const clientes = await Promise.all([
    prisma.cliente.create({
      data: { nome: 'João Silva', email: 'joao.silva@email.com' },
    }),
    prisma.cliente.create({
      data: { nome: 'Maria Santos', email: 'maria.santos@email.com' },
    }),
    prisma.cliente.create({
      data: { nome: 'Pedro Oliveira', email: 'pedro.oliveira@email.com' },
    }),
    prisma.cliente.create({
      data: { nome: 'Ana Costa', email: 'ana.costa@email.com' },
    }),
    prisma.cliente.create({
      data: { nome: 'Carlos Ferreira', email: 'carlos.ferreira@email.com' },
    }),
    prisma.cliente.create({
      data: { nome: 'Lucia Mendes', email: 'lucia.mendes@email.com' },
    }),
    prisma.cliente.create({
      data: { nome: 'Roberto Lima', email: 'roberto.lima@email.com' },
    }),
    prisma.cliente.create({
      data: { nome: 'Fernanda Rocha', email: 'fernanda.rocha@email.com' },
    }),
    prisma.cliente.create({
      data: { nome: 'Marcos Alves', email: 'marcos.alves@email.com' },
    }),
    prisma.cliente.create({
      data: { nome: 'Patricia Nunes', email: 'patricia.nunes@email.com' },
    }),
  ]);

  console.log(`✅ ${clientes.length} clientes criados`);

  const assinaturas = await Promise.all([
    prisma.assinatura.create({
      data: {
        codPlano: planos[0].codigo,
        codCli: clientes[0].codigo,
        custoFinal: '39.90',
        descricao: 'Desconto de bom pagador aplicado',
        inicioFidelidade: new Date('2024-08-01T00:00:00-03:00'),
        fimFidelidade: new Date('2025-08-01T00:00:00-03:00'),
        dataUltimoPagamento: new Date(),
      },
    }),
    prisma.assinatura.create({
      data: {
        codPlano: planos[1].codigo,
        codCli: clientes[1].codigo,
        custoFinal: '79.90',
        descricao: 'Promoção de fidelidade',
        inicioFidelidade: new Date('2024-06-15T00:00:00-03:00'),
        fimFidelidade: new Date('2025-06-15T00:00:00-03:00'),
        dataUltimoPagamento: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      },
    }),
    prisma.assinatura.create({
      data: {
        codPlano: planos[2].codigo,
        codCli: clientes[2].codigo,
        custoFinal: '129.90',
        descricao: 'Valor integral sem desconto',
        inicioFidelidade: new Date('2024-01-01T00:00:00-03:00'),
        fimFidelidade: new Date('2025-01-01T00:00:00-03:00'),
        dataUltimoPagamento: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000),
      },
    }),
    prisma.assinatura.create({
      data: {
        codPlano: planos[3].codigo,
        codCli: clientes[3].codigo,
        custoFinal: '179.90',
        descricao: 'Desconto empresarial',
        inicioFidelidade: new Date('2024-07-01T00:00:00-03:00'),
        fimFidelidade: new Date('2025-07-01T00:00:00-03:00'),
        dataUltimoPagamento: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      },
    }),
    prisma.assinatura.create({
      data: {
        codPlano: planos[4].codigo,
        codCli: clientes[4].codigo,
        custoFinal: '24.90',
        descricao: 'Desconto estudante aplicado',
        inicioFidelidade: new Date('2025-03-01T00:00:00-03:00'),
        fimFidelidade: new Date('2026-03-01T00:00:00-03:00'),
        dataUltimoPagamento: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      },
    }),
  ]);

  console.log(`✅ ${assinaturas.length} assinaturas criadas`);

  console.log('🎉 Seeding concluído com sucesso!');
  console.log('\n📊 Resumo dos dados criados:');
  console.log(`Clientes: ${clientes.length}`);
  console.log(`Planos: ${planos.length}`);
  console.log(`Assinaturas: ${assinaturas.length}`);
  console.log('\n Agora você pode testar os endpoints!');
}

main()
  .catch((e) => {
    console.error('Erro durante o seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
