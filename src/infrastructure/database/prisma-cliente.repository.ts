import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Cliente } from '../../domain/entities/cliente.entity';
import { ClienteRepository } from '../../domain/repositories/cliente.repository';

@Injectable()
export class PrismaClienteRepository implements ClienteRepository {
  constructor(private prisma: PrismaService) {}

  async listarTodos(): Promise<Cliente[]> {
    const clientes = await this.prisma.cliente.findMany();
    return clientes.map(this.toDomain);
  }

  private toDomain(cliente: any): Cliente {
    return new Cliente(cliente.codigo, cliente.nome, cliente.email);
  }
}
