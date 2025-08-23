import { Controller, Get } from '@nestjs/common';
import { GestaoService } from './gestao.service';

@Controller('gestao')
export class GestaoController {
  constructor(private readonly gestaoService: GestaoService) {}

  @Get('clientes')
  listarClientes() {
    return this.gestaoService.listarClientes();
  }
}
