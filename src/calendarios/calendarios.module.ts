import { Module } from '@nestjs/common';
import { CalendariosService } from './calendarios.service';
import { CalendariosController } from './calendarios.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CalendariosController],
  providers: [CalendariosService],
})
export class CalendariosModule {}
