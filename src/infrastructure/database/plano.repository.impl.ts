import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Plano } from '../../domain/entities/plano.entity';
import { PlanoRepository } from '../../domain/repositories/plano.repository';
import { PlanoConverter } from './plano.converter';

@Injectable()
export class PlanoRepositoryImpl implements PlanoRepository {
  constructor(private prisma: PrismaService) {}

  async listarTodos(): Promise<Plano[]> {
    const planos = await this.prisma.plano.findMany();
    return planos.map((plano) => PlanoConverter.toDomain(plano));
  }

  async atualizarCustoMensal(
    codigo: number,
    custoMensal: number,
  ): Promise<Plano> {
    const plano = await this.prisma.plano.update({
      where: { codigo },
      data: { custoMensal, data: new Date() },
    });
    return PlanoConverter.toDomain(plano);
  }
}
