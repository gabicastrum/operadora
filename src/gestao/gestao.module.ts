import { Module } from '@nestjs/common';
import { GestaoController } from './gestao.controller';
import { GestaoService } from './gestao.service';
import { PrismaService } from 'src/prisma.service';
import { ClienteRepository } from './cliente.repository';
import { PrismaClienteRepository } from './prisma-cliente.repository';

@Module({
  controllers: [GestaoController],
  providers: [
    GestaoService,
    PrismaService,
    {
      provide: ClienteRepository,
      useClass: PrismaClienteRepository,
    },
  ],
})
export class GestaoModule {}
