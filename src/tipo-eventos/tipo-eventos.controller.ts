import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { TipoEventosService } from './tipo-eventos.service';
import { CreateTipoEventoDto } from './dto/create-tipo-evento.dto';
import { UpdateTipoEventoDto } from './dto/update-tipo-evento.dto';

@Controller('tipo-eventos')
export class TipoEventosController {
  constructor(private readonly tipoEventosService: TipoEventosService) {}

  @Post()
  create(@Body() createTipoEventoDto: CreateTipoEventoDto) {
    return this.tipoEventosService.create(createTipoEventoDto);
  }

  @Get()
  findAll() {
    return this.tipoEventosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoEventosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoEventoDto: UpdateTipoEventoDto,
  ) {
    return this.tipoEventosService.update(+id, updateTipoEventoDto);
  }
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoEventosService.remove(+id);
  }
}
