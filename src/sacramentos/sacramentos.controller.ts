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
import { SacramentosService } from './sacramentos.service';
import { CreateSacramentoDto } from './dto/create-sacramento.dto';
import { UpdateSacramentoDto } from './dto/update-sacramento.dto';

@Controller('sacramentos')
export class SacramentosController {
  constructor(private readonly sacramentosService: SacramentosService) {}

  @Post()
  create(@Body() createSacramentoDto: CreateSacramentoDto) {
    return this.sacramentosService.create(createSacramentoDto);
  }

  @Get()
  findAll() {
    return this.sacramentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sacramentosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSacramentoDto: UpdateSacramentoDto,
  ) {
    return this.sacramentosService.update(+id, updateSacramentoDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sacramentosService.remove(+id);
  }
}
