import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { PlanoService } from '../../application/use-cases/plano.service';
import { Plano } from '../../domain/entities/plano.entity';

@Controller('planos')
export class PlanoController {
  constructor(private readonly planoService: PlanoService) {}

  @Get()
  async listarTodos(): Promise<Plano[]> {
    return this.planoService.listarTodos();
  }

  @Patch(':id')
  async atualizarCustoMensal(
    @Param('id') id: string,
    @Body() body: { custoMensal: number },
  ): Promise<Plano> {
    return this.planoService.atualizarCustoMensal(Number(id), body.custoMensal);
  }
}
