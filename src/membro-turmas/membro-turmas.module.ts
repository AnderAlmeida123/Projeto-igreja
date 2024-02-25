import { Module } from '@nestjs/common';
import { MembroTurmasService } from './membro-turmas.service';
import { MembroTurmasController } from './membro-turmas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MembroTurmasController],
  providers: [MembroTurmasService],
})
export class MembroTurmasModule {}
