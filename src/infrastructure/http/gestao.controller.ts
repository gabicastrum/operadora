import { Controller, Get, Param } from '@nestjs/common';
import { AssinaturaService } from '../../application/use-cases/assinatura.service';
import type { AssinaturaListDto } from '../../domain/repositories/assinatura.repository';

@Controller()
export class GestaoController {
  constructor(private readonly assinaturaService: AssinaturaService) {}

  @Get('clientes/:codcli/assinaturas')
  async listarAssinaturasPorCliente(
    @Param('codcli') codcli: string,
  ): Promise<AssinaturaListDto[]> {
    return this.assinaturaService.listarPorCliente(Number(codcli));
  }

  @Get('planos/:codplano/assinaturas')
  async listarAssinaturasPorPlano(
    @Param('codplano') codplano: string,
  ): Promise<AssinaturaListDto[]> {
    return this.assinaturaService.listarPorPlano(Number(codplano));
  }
}
