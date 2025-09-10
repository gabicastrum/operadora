import { Assinatura } from '../../domain/entities/assinatura.entity';
import { AssinaturaListDto } from '../../domain/repositories/assinatura.repository';
import { PERIOD_MS } from '../../shared/constants';

export class AssinaturaConverter {
  static toDomain(assinatura: any): Assinatura {
    return new Assinatura(
      assinatura.codigo,
      assinatura.codPlano,
      assinatura.codCli,
      assinatura.inicioFidelidade,
      assinatura.fimFidelidade,
      assinatura.dataUltimoPagamento,
      assinatura.custoFinal,
      assinatura.descricao,
    );
  }

  static toListDto(assinatura: any): AssinaturaListDto {
    const hoje = new Date();
    const trintaDiasAtras = new Date(hoje.getTime() - PERIOD_MS.THIRTY_DAYS);
    const isAtiva = assinatura.dataUltimoPagamento >= trintaDiasAtras;

    return {
      codigo: assinatura.codigo,
      codCli: assinatura.codCli,
      codPlano: assinatura.codPlano,
      dataInicio: assinatura.inicioFidelidade,
      dataFim: assinatura.fimFidelidade,
      status: isAtiva ? 'ATIVO' : 'CANCELADO',
    };
  }

  static isAssinaturaAtiva(dataUltimoPagamento: Date): boolean {
    const hoje = new Date();
    const trintaDiasAtras = new Date(hoje.getTime() - PERIOD_MS.THIRTY_DAYS);
    return dataUltimoPagamento >= trintaDiasAtras;
  }
}
