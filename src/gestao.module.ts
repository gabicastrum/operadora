import { Module } from '@nestjs/common';
import { GestaoController } from './infrastructure/http/gestao.controller';
import { AssinaturaService } from './application/use-cases/assinatura.service';
import { AssinaturaRepository } from './domain/repositories/assinatura.repository';
import { AssinaturaRepositoryImpl } from './infrastructure/database/assinatura.repository.impl';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [GestaoController],
  providers: [
    AssinaturaService,
    {
      provide: AssinaturaRepository,
      useClass: AssinaturaRepositoryImpl,
    },
    PrismaService,
  ],
})
export class GestaoModule {}
