import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Plano } from '../../domain/entities/plano.entity';
import { PlanoRepository } from '../../domain/repositories/plano.repository';

@Injectable()
export class PrismaPlanoRepository implements PlanoRepository {
  constructor(private prisma: PrismaService) {}

  async listarTodos(): Promise<Plano[]> {
    const planos = await this.prisma.plano.findMany();
    return planos.map(this.toDomain);
  }

  async atualizarCustoMensal(
    codigo: number,
    custoMensal: number,
  ): Promise<Plano> {
    const plano = await this.prisma.plano.update({
      where: { codigo },
      data: { custoMensal, data: new Date() },
    });
    return this.toDomain(plano);
  }

  private toDomain(plano: any): Plano {
    return new Plano(
      plano.codigo,
      plano.nome,
      plano.custoMensal,
      plano.data,
      plano.descricao,
    );
  }
}
