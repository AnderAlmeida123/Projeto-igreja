import { Module } from '@nestjs/common';
import { SetorsService } from './setors.service';
import { SetorsController } from './setors.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SetorsController],
  providers: [SetorsService],
})
export class SetorsModule {}
