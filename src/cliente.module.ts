import { Module } from '@nestjs/common';
import { ClienteController } from './infrastructure/http/cliente.controller';
import { ClienteService } from './application/use-cases/cliente.service';
import { ClienteRepository } from './domain/repositories/cliente.repository';
import { PrismaClienteRepository } from './infrastructure/database/prisma-cliente.repository';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [ClienteController],
  providers: [
    ClienteService,
    {
      provide: ClienteRepository,
      useClass: PrismaClienteRepository,
    },
    PrismaService,
  ],
})
export class ClienteModule {}
