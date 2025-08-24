import { Injectable } from '@nestjs/common';
import { PlanoRepository } from '../../domain/repositories/plano.repository';
import { Plano } from '../../domain/entities/plano.entity';

@Injectable()
export class PlanoService {
  constructor(private planoRepository: PlanoRepository) {}

  async listarTodos(): Promise<Plano[]> {
    return this.planoRepository.listarTodos();
  }

  async atualizarCustoMensal(id: number, custoMensal: number): Promise<Plano> {
    return this.planoRepository.atualizarCustoMensal(id, custoMensal);
  }
}
