import { Module } from '@nestjs/common';
import { AssinaturaController } from './infrastructure/http/assinatura.controller';
import { AssinaturaService } from './application/use-cases/assinatura.service';
import { AssinaturaRepository } from './domain/repositories/assinatura.repository';
import { PrismaAssinaturaRepository } from './infrastructure/database/prisma-assinatura.repository';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [AssinaturaController],
  providers: [
    AssinaturaService,
    {
      provide: AssinaturaRepository,
      useClass: PrismaAssinaturaRepository,
    },
    PrismaService,
  ],
})
export class AssinaturaModule {}
