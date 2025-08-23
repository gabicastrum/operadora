import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { GestaoModule } from './gestao.module';
@Module({
  imports: [GestaoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
