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
import { TesourariasService } from './tesourarias.service';
import { CreateTesourariaDto } from './dto/create-tesouraria.dto';
import { UpdateTesourariaDto } from './dto/update-tesouraria.dto';

@Controller('tesourarias')
export class TesourariasController {
  constructor(private readonly tesourariasService: TesourariasService) {}

  @Post()
  create(@Body() createTesourariaDto: CreateTesourariaDto) {
    return this.tesourariasService.create(createTesourariaDto);
  }

  @Get()
  findAll() {
    return this.tesourariasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tesourariasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTesourariaDto: UpdateTesourariaDto,
  ) {
    return this.tesourariasService.update(+id, updateTesourariaDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tesourariasService.remove(+id);
  }
}
