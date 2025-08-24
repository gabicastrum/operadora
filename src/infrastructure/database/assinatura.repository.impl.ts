import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Assinatura } from '../../domain/entities/assinatura.entity';
import {
  AssinaturaRepository,
  CriarAssinaturaDto,
  AssinaturaListDto,
} from '../../domain/repositories/assinatura.repository';
import { AssinaturaConverter } from './assinatura.converter';
import { PERIOD_MS, PERIOD_YEARS } from '../../shared/constants';

@Injectable()
export class AssinaturaRepositoryImpl implements AssinaturaRepository {
  constructor(private prisma: PrismaService) {}

  async criar(dados: CriarAssinaturaDto): Promise<Assinatura> {
    const hoje = new Date();
    const fimFidelidade = new Date(hoje);
    fimFidelidade.setFullYear(hoje.getFullYear() + PERIOD_YEARS.FIDELITY_PERIOD);

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

    return AssinaturaConverter.toDomain(assinatura);
  }

  async listarPorTipo(
    tipo: 'TODOS' | 'ATIVOS' | 'CANCELADOS',
  ): Promise<AssinaturaListDto[]> {
    const hoje = new Date();
    const trintaDiasAtras = new Date(hoje.getTime() - PERIOD_MS.THIRTY_DAYS);

    const assinaturaTipoWhere = {
      ATIVOS: {
        dataUltimoPagamento: {
          gte: trintaDiasAtras,
        },
      },
      CANCELADOS: {
        dataUltimoPagamento: {
          lt: trintaDiasAtras,
        },
      },
      TODOS: {},
    };

    const where = assinaturaTipoWhere[tipo] || {};

    const assinaturas = await this.prisma.assinatura.findMany({
      where,
    });

    return assinaturas.map((assinatura) =>
      AssinaturaConverter.toListDto(assinatura),
    );
  }

  async listarPorCliente(codCli: number): Promise<AssinaturaListDto[]> {
    const assinaturas = await this.prisma.assinatura.findMany({
      where: { codCli },
    });

    return assinaturas.map((assinatura) =>
      AssinaturaConverter.toListDto(assinatura),
    );
  }

  async listarPorPlano(codPlano: number): Promise<AssinaturaListDto[]> {
    const assinaturas = await this.prisma.assinatura.findMany({
      where: { codPlano },
    });

    return assinaturas.map((assinatura) =>
      AssinaturaConverter.toListDto(assinatura),
    );
  }
}
