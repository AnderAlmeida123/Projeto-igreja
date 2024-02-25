import { Module } from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { ContatosController } from './contatos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ContatosController],
  providers: [ContatosService],
})
export class ContatosModule {}
