import { Cliente } from '@prisma/client';

export abstract class ClienteRepository {
  abstract listarTodos(): Promise<Cliente[]>;
}
