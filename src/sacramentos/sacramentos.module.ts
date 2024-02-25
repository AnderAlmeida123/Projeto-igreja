import { Module } from '@nestjs/common';
import { SacramentosService } from './sacramentos.service';
import { SacramentosController } from './sacramentos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SacramentosController],
  providers: [SacramentosService],
})
export class SacramentosModule {}
