import { Module } from '@nestjs/common';
import { GestaoController } from './infrastructure/http/gestao.controller';
import { GestaoService } from './application/use-cases/gestao.service';
import { PrismaService } from './prisma.service';
import { ClienteRepository } from './domain/repositories/cliente.repository';
import { PlanoRepository } from './domain/repositories/plano.repository';
import { AssinaturaRepository } from './domain/repositories/assinatura.repository';
import { PrismaClienteRepository } from './infrastructure/database/prisma-cliente.repository';
import { PrismaPlanoRepository } from './infrastructure/database/prisma-plano.repository';
import { PrismaAssinaturaRepository } from './infrastructure/database/prisma-assinatura.repository';

@Module({
  controllers: [GestaoController],
  providers: [
    GestaoService,
    PrismaService,
    {
      provide: ClienteRepository,
      useClass: PrismaClienteRepository,
    },
    {
      provide: PlanoRepository,
      useClass: PrismaPlanoRepository,
    },
    {
      provide: AssinaturaRepository,
      useClass: PrismaAssinaturaRepository,
    },
  ],
})
export class GestaoModule {}
