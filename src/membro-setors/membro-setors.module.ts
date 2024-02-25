import { Module } from '@nestjs/common';
import { MembroSetorsService } from './membro-setors.service';
import { MembroSetorsController } from './membro-setors.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MembroSetorsController],
  providers: [MembroSetorsService],
})
export class MembroSetorsModule {}
