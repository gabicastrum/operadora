import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Cliente } from '@prisma/client';
import { ClienteRepository } from './cliente.repository';

@Injectable()
export class PrismaClienteRepository implements ClienteRepository {
  constructor(private prisma: PrismaService) {}

  async listarTodos(): Promise<Cliente[]> {
    return this.prisma.cliente.findMany();
  }
}
