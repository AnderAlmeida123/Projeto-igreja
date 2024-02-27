import { Module } from '@nestjs/common';
import { DizimosService } from './dizimos.service';
import { DizimosController } from './dizimos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DizimosController],
  providers: [DizimosService],
})
export class DizimosModule {}
