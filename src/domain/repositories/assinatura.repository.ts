import { Assinatura } from '../entities/assinatura.entity';

export interface CriarAssinaturaDto {
  codCli: number;
  codPlano: number;
  custoFinal: number;
  descricao: string;
}

export interface AssinaturaListDto {
  codigo: number;
  codCli: number;
  codPlano: number;
  dataInicio: Date;
  dataFim: Date;
  status: 'ATIVO' | 'CANCELADO';
}

export abstract class AssinaturaRepository {
  abstract criar(dados: CriarAssinaturaDto): Promise<Assinatura>;
  abstract listarPorTipo(
    tipo: 'TODOS' | 'ATIVOS' | 'CANCELADOS',
  ): Promise<AssinaturaListDto[]>;
  abstract listarPorCliente(codCli: number): Promise<AssinaturaListDto[]>;
  abstract listarPorPlano(codPlano: number): Promise<AssinaturaListDto[]>;
}
