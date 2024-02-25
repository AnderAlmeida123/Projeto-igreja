import { Module } from '@nestjs/common';
import { ComunidadesService } from './comunidades.service';
import { ComunidadesController } from './comunidades.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ComunidadesController],
  providers: [ComunidadesService],
})
export class ComunidadesModule {}
