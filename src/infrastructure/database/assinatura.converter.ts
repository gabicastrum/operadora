import { Assinatura } from '../../domain/entities/assinatura.entity';
import { AssinaturaListDto } from '../../domain/repositories/assinatura.repository';

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
    const trintaDiasAtras = new Date(hoje.getTime() - 30 * 24 * 60 * 60 * 1000);
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
    const trintaDiasAtras = new Date(hoje.getTime() - 30 * 24 * 60 * 60 * 1000);
    return dataUltimoPagamento >= trintaDiasAtras;
  }
}
