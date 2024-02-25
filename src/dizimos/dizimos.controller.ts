import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DizimosService } from './dizimos.service';
import { CreateDizimoDto } from './dto/create-dizimo.dto';
import { UpdateDizimoDto } from './dto/update-dizimo.dto';

@Controller('dizimos')
export class DizimosController {
  constructor(private readonly dizimosService: DizimosService) {}

  @Post()
  create(@Body() createDizimoDto: CreateDizimoDto) {
    return this.dizimosService.create(createDizimoDto);
  }

  @Get()
  findAll() {
    return this.dizimosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dizimosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDizimoDto: UpdateDizimoDto) {
    return this.dizimosService.update(+id, updateDizimoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dizimosService.remove(+id);
  }
}
