import { Module } from '@nestjs/common';
import { ClienteController } from './infrastructure/http/cliente.controller';
import { ClienteService } from './application/use-cases/cliente.service';
import { ClienteRepository } from './domain/repositories/cliente.repository';
import { ClienteRepositoryImpl } from './infrastructure/database/cliente.repository.impl';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [ClienteController],
  providers: [
    ClienteService,
    {
      provide: ClienteRepository,
      useClass: ClienteRepositoryImpl,
    },
    PrismaService,
  ],
})
export class ClienteModule {}
