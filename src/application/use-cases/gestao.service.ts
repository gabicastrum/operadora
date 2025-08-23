import { Injectable } from '@nestjs/common';
import { ClienteRepository } from '../../domain/repositories/cliente.repository';
import { PlanoRepository } from '../../domain/repositories/plano.repository';
import {
  AssinaturaRepository,
  CriarAssinaturaDto,
  AssinaturaListDto,
} from '../../domain/repositories/assinatura.repository';
import { Cliente } from '../../domain/entities/cliente.entity';
import { Plano } from '../../domain/entities/plano.entity';
import { Assinatura } from '../../domain/entities/assinatura.entity';

@Injectable()
export class GestaoService {
  constructor(
    private clienteRepository: ClienteRepository,
    private planoRepository: PlanoRepository,
    private assinaturaRepository: AssinaturaRepository,
  ) {}

  async listarClientes(): Promise<Cliente[]> {
    return this.clienteRepository.listarTodos();
  }

  async listarPlanos(): Promise<Plano[]> {
    return this.planoRepository.listarTodos();
  }

  async criarAssinatura(dados: CriarAssinaturaDto): Promise<Assinatura> {
    return this.assinaturaRepository.criar(dados);
  }

  async atualizarCustoPlano(
    idPlano: number,
    custoMensal: number,
  ): Promise<Plano> {
    return this.planoRepository.atualizarCustoMensal(idPlano, custoMensal);
  }

  async listarAssinaturas(
    tipo: 'TODOS' | 'ATIVOS' | 'CANCELADOS',
  ): Promise<AssinaturaListDto[]> {
    return this.assinaturaRepository.listarPorTipo(tipo);
  }

  async listarAssinaturasCliente(codCli: number): Promise<AssinaturaListDto[]> {
    return this.assinaturaRepository.listarPorCliente(codCli);
  }

  async listarAssinaturasPlano(codPlano: number): Promise<AssinaturaListDto[]> {
    return this.assinaturaRepository.listarPorPlano(codPlano);
  }
}
