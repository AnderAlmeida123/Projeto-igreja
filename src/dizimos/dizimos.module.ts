import { Module } from '@nestjs/common';
import { DizimosService } from './dizimos.service';
import { DizimosController } from './dizimos.controller';

@Module({
  controllers: [DizimosController],
  providers: [DizimosService],
})
export class DizimosModule {}
