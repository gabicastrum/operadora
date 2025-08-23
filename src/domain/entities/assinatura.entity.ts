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
      new Date(hoje.getTime() - 30 * 24 * 60 * 60 * 1000)
    );
  }
}
