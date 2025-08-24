import { Injectable } from '@nestjs/common';
import {
  AssinaturaRepository,
  CriarAssinaturaDto,
  AssinaturaListDto,
} from '../../domain/repositories/assinatura.repository';
import { Assinatura } from '../../domain/entities/assinatura.entity';

@Injectable()
export class AssinaturaService {
  constructor(private assinaturaRepository: AssinaturaRepository) {}

  async criar(dados: CriarAssinaturaDto): Promise<Assinatura> {
    return this.assinaturaRepository.criar(dados);
  }

  async listarPorTipo(
    tipo: 'TODOS' | 'ATIVOS' | 'CANCELADOS',
  ): Promise<AssinaturaListDto[]> {
    return this.assinaturaRepository.listarPorTipo(tipo);
  }

  async listarPorCliente(codCli: number): Promise<AssinaturaListDto[]> {
    return this.assinaturaRepository.listarPorCliente(codCli);
  }

  async listarPorPlano(codPlano: number): Promise<AssinaturaListDto[]> {
    return this.assinaturaRepository.listarPorPlano(codPlano);
  }
}
