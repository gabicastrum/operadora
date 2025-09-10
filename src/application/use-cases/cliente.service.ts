import { Injectable } from '@nestjs/common';
import { ClienteRepository } from '../../domain/repositories/cliente.repository';
import { Cliente } from '../../domain/entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(private clienteRepository: ClienteRepository) {}

  async listarTodos(): Promise<Cliente[]> {
    return this.clienteRepository.listarTodos();
  }
}
