import { PERIOD_MS } from '../../shared/constants';

export class Assinatura {
  constructor(
    public readonly codigo: number,
    public readonly codPlano: number,
    public readonly codCli: number,
    public readonly inicioFidelidade: Date,
    public readonly fimFidelidade: Date,
    public readonly dataUltimoPagamento: Date,
    public readonly custoFinal: number,
    public readonly descricao: string,
  ) {}

  isAtiva(): boolean {
    const hoje = new Date();
    return (
      this.dataUltimoPagamento >=
      new Date(hoje.getTime() - PERIOD_MS.THIRTY_DAYS)
    );
  }
}
