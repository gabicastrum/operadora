import { Plano } from '../../domain/entities/plano.entity';

export class PlanoConverter {
  static toDomain(plano: any): Plano {
    return new Plano(
      plano.codigo,
      plano.nome,
      plano.custoMensal,
      plano.data,
      plano.descricao,
    );
  }
}
