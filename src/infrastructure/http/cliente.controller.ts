import { Controller, Get } from '@nestjs/common';
import { ClienteService } from '../../application/use-cases/cliente.service';
import { Cliente } from '../../domain/entities/cliente.entity';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  async listarTodos(): Promise<Cliente[]> {
    return this.clienteService.listarTodos();
  }
}
