import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Assinatura } from '../../domain/entities/assinatura.entity';
import {
  AssinaturaRepository,
  CriarAssinaturaDto,
  AssinaturaListDto,
} from '../../domain/repositories/assinatura.repository';

@Injectable()
export class PrismaAssinaturaRepository implements AssinaturaRepository {
  constructor(private prisma: PrismaService) {}

  async criar(dados: CriarAssinaturaDto): Promise<Assinatura> {
    const hoje = new Date();
    const fimFidelidade = new Date(hoje);
    fimFidelidade.setFullYear(hoje.getFullYear() + 1);

    const assinatura = await this.prisma.assinatura.create({
      data: {
        codPlano: dados.codPlano,
        codCli: dados.codCli,
        custoFinal: dados.custoFinal,
        descricao: dados.descricao,
        inicioFidelidade: hoje,
        fimFidelidade,
        dataUltimoPagamento: hoje,
      },
    });

    return this.toDomain(assinatura);
  }

  async listarPorTipo(
    tipo: 'TODOS' | 'ATIVOS' | 'CANCELADOS',
  ): Promise<AssinaturaListDto[]> {
    const hoje = new Date();
    const trintaDiasAtras = new Date(hoje.getTime() - 30 * 24 * 60 * 60 * 1000);

    let where = {};
    if (tipo === 'ATIVOS') {
      where = {
        dataUltimoPagamento: {
          gte: trintaDiasAtras,
        },
      };
    } else if (tipo === 'CANCELADOS') {
      where = {
        dataUltimoPagamento: {
          lt: trintaDiasAtras,
        },
      };
    }

    const assinaturas = await this.prisma.assinatura.findMany({
      where,
    });

    return assinaturas.map(this.toListDto);
  }

  async listarPorCliente(codCli: number): Promise<AssinaturaListDto[]> {
    const assinaturas = await this.prisma.assinatura.findMany({
      where: { codCli },
    });

    return assinaturas.map(this.toListDto);
  }

  async listarPorPlano(codPlano: number): Promise<AssinaturaListDto[]> {
    const assinaturas = await this.prisma.assinatura.findMany({
      where: { codPlano },
    });

    return assinaturas.map(this.toListDto);
  }

  private toDomain(assinatura: any): Assinatura {
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

  private toListDto(assinatura: any): AssinaturaListDto {
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
}
