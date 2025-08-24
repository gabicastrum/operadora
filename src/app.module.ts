import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ClienteModule } from './cliente.module';
import { PlanoModule } from './plano.module';
import { AssinaturaModule } from './assinatura.module';

@Module({
  imports: [ClienteModule, PlanoModule, AssinaturaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
