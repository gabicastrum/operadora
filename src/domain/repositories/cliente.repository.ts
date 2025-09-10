import { Cliente } from '../entities/cliente.entity';

export abstract class ClienteRepository {
  abstract listarTodos(): Promise<Cliente[]>;
}
