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
import { SetorsService } from './setors.service';
import { CreateSetorDto } from './dto/create-setor.dto';
import { UpdateSetorDto } from './dto/update-setor.dto';

@Controller('setors')
export class SetorsController {
  constructor(private readonly setorsService: SetorsService) {}

  @Post()
  create(@Body() createSetorDto: CreateSetorDto) {
    return this.setorsService.create(createSetorDto);
  }

  @Get()
  findAll() {
    return this.setorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.setorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSetorDto: UpdateSetorDto) {
    return this.setorsService.update(+id, updateSetorDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.setorsService.remove(+id);
  }
}
