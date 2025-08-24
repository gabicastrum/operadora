import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Assinatura } from '../../domain/entities/assinatura.entity';
import {
  AssinaturaRepository,
  CriarAssinaturaDto,
  AssinaturaListDto,
} from '../../domain/repositories/assinatura.repository';
import { AssinaturaConverter } from './assinatura.converter';

@Injectable()
export class AssinaturaRepositoryImpl implements AssinaturaRepository {
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

    return AssinaturaConverter.toDomain(assinatura);
  }

  async listarPorTipo(
    tipo: 'TODOS' | 'ATIVOS' | 'CANCELADOS',
  ): Promise<AssinaturaListDto[]> {
    const hoje = new Date();
    const trintaDiasAtras = new Date(hoje.getTime() - 30 * 24 * 60 * 60 * 1000);

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
