import { Injectable } from '@nestjs/common';
import { ClienteRepository } from './cliente.repository';

@Injectable()
export class GestaoService {
  constructor(
    private clienteRepository: ClienteRepository,
    // Injetaremos outros repositórios aqui no futuro
  ) {}

  async listarClientes() {
    return this.clienteRepository.listarTodos();
  }
}
