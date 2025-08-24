import { Cliente } from '../../domain/entities/cliente.entity';

export class ClienteConverter {
  static toDomain(cliente: any): Cliente {
    return new Cliente(cliente.codigo, cliente.nome, cliente.email);
  }
}
