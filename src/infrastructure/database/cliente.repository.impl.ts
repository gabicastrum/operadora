import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Cliente } from '../../domain/entities/cliente.entity';
import { ClienteRepository } from '../../domain/repositories/cliente.repository';
import { ClienteConverter } from './cliente.converter';

@Injectable()
export class ClienteRepositoryImpl implements ClienteRepository {
  constructor(private prisma: PrismaService) {}

  async listarTodos(): Promise<Cliente[]> {
    const clientes = await this.prisma.cliente.findMany();
    return clientes.map((cliente) => ClienteConverter.toDomain(cliente));
  }
}
