import { Module } from '@nestjs/common';
import { TesourariasService } from './tesourarias.service';
import { TesourariasController } from './tesourarias.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TesourariasController],
  providers: [TesourariasService],
})
export class TesourariasModule {}
