import { Module } from '@nestjs/common';
import { TipoSacramentosService } from './tipo-sacramentos.service';
import { TipoSacramentosController } from './tipo-sacramentos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TipoSacramentosController],
  providers: [TipoSacramentosService],
})
export class TipoSacramentosModule {}
