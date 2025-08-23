import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { GestaoService } from '../../application/use-cases/gestao.service';
import type { CriarAssinaturaDto } from '../../domain/repositories/assinatura.repository';

@Controller('gestao')
export class GestaoController {
  constructor(private readonly gestaoService: GestaoService) {}

  @Get('clientes')
  listarClientes() {
    return this.gestaoService.listarClientes();
  }

  @Get('planos')
  listarPlanos() {
    return this.gestaoService.listarPlanos();
  }

  @Post('assinaturas')
  criarAssinatura(@Body() dados: CriarAssinaturaDto) {
    return this.gestaoService.criarAssinatura(dados);
  }

  @Patch('planos/:idPlano')
  atualizarCustoPlano(
    @Param('idPlano') idPlano: string,
    @Body() body: { custoMensal: number },
  ) {
    return this.gestaoService.atualizarCustoPlano(
      Number(idPlano),
      body.custoMensal,
    );
  }

  @Get('assinaturas/:tipo')
  listarAssinaturas(@Param('tipo') tipo: 'TODOS' | 'ATIVOS' | 'CANCELADOS') {
    return this.gestaoService.listarAssinaturas(tipo);
  }

  @Get('assinaturascliente/:codcli')
  listarAssinaturasCliente(@Param('codcli') codcli: string) {
    return this.gestaoService.listarAssinaturasCliente(Number(codcli));
  }

  @Get('assinaturasplano/:codplano')
  listarAssinaturasPlano(@Param('codplano') codplano: string) {
    return this.gestaoService.listarAssinaturasPlano(Number(codplano));
  }
}
