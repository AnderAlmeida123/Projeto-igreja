import { Module } from '@nestjs/common';
import { EstoquesService } from './estoques.service';
import { EstoquesController } from './estoques.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EstoquesController],
  providers: [EstoquesService],
})
export class EstoquesModule {}
