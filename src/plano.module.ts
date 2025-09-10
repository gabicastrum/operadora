import { Module } from '@nestjs/common';
import { PlanoController } from './infrastructure/http/plano.controller';
import { PlanoService } from './application/use-cases/plano.service';
import { PlanoRepository } from './domain/repositories/plano.repository';
import { PlanoRepositoryImpl } from './infrastructure/database/plano.repository.impl';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [PlanoController],
  providers: [
    PlanoService,
    {
      provide: PlanoRepository,
      useClass: PlanoRepositoryImpl,
    },
    PrismaService,
  ],
})
export class PlanoModule {}
