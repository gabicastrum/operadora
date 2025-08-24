import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AssinaturaService } from '../../application/use-cases/assinatura.service';
import type {
  CriarAssinaturaDto,
  AssinaturaListDto,
} from '../../domain/repositories/assinatura.repository';
import { Assinatura } from '../../domain/entities/assinatura.entity';

@Controller('assinaturas')
export class AssinaturaController {
  constructor(private readonly assinaturaService: AssinaturaService) {}

  @Post()
  async criar(@Body() dados: CriarAssinaturaDto): Promise<Assinatura> {
    return this.assinaturaService.criar(dados);
  }

  @Get(':tipo')
  async listarPorTipo(
    @Param('tipo') tipo: 'TODOS' | 'ATIVOS' | 'CANCELADOS',
  ): Promise<AssinaturaListDto[]> {
    return this.assinaturaService.listarPorTipo(tipo);
  }

  @Get('cliente/:codcli')
  async listarPorCliente(
    @Param('codcli') codcli: string,
  ): Promise<AssinaturaListDto[]> {
    return this.assinaturaService.listarPorCliente(Number(codcli));
  }

  @Get('plano/:codplano')
  async listarPorPlano(
    @Param('codplano') codplano: string,
  ): Promise<AssinaturaListDto[]> {
    return this.assinaturaService.listarPorPlano(Number(codplano));
  }
}
