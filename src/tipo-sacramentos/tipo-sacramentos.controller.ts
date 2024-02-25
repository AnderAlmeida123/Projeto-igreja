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
import { TipoSacramentosService } from './tipo-sacramentos.service';
import { CreateTipoSacramentoDto } from './dto/create-tipo-sacramento.dto';
import { UpdateTipoSacramentoDto } from './dto/update-tipo-sacramento.dto';

@Controller('tipo-sacramentos')
export class TipoSacramentosController {
  constructor(
    private readonly tipoSacramentosService: TipoSacramentosService,
  ) {}

  @Post()
  create(@Body() createTipoSacramentoDto: CreateTipoSacramentoDto) {
    return this.tipoSacramentosService.create(createTipoSacramentoDto);
  }

  @Get()
  findAll() {
    return this.tipoSacramentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoSacramentosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoSacramentoDto: UpdateTipoSacramentoDto,
  ) {
    return this.tipoSacramentosService.update(+id, updateTipoSacramentoDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoSacramentosService.remove(+id);
  }
}
