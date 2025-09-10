import { Plano } from '../entities/plano.entity';

export abstract class PlanoRepository {
  abstract listarTodos(): Promise<Plano[]>;
  abstract atualizarCustoMensal(
    codigo: number,
    custoMensal: number,
  ): Promise<Plano>;
}
