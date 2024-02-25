import { Module } from '@nestjs/common';
import { TipoEventosService } from './tipo-eventos.service';
import { TipoEventosController } from './tipo-eventos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TipoEventosController],
  providers: [TipoEventosService],
})
export class TipoEventosModule {}
