import { Module } from '@nestjs/common';
import { PlanoController } from './infrastructure/http/plano.controller';
import { PlanoService } from './application/use-cases/plano.service';
import { PlanoRepository } from './domain/repositories/plano.repository';
import { PrismaPlanoRepository } from './infrastructure/database/prisma-plano.repository';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [PlanoController],
  providers: [
    PlanoService,
    {
      provide: PlanoRepository,
      useClass: PrismaPlanoRepository,
    },
    PrismaService,
  ],
})
export class PlanoModule {}
