import { Module } from '@nestjs/common';
import { PessoasService } from './pessoas.service';
import { PessoasController } from './pessoas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PessoasController],
  providers: [PessoasService],
})
export class PessoasModule {}
