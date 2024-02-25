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
import { MembroSetorsService } from './membro-setors.service';
import { CreateMembroSetorDto } from './dto/create-membro-setor.dto';
import { UpdateMembroSetorDto } from './dto/update-membro-setor.dto';

@Controller('membro-setors')
export class MembroSetorsController {
  constructor(private readonly membroSetorsService: MembroSetorsService) {}

  @Post()
  create(@Body() createMembroSetorDto: CreateMembroSetorDto) {
    return this.membroSetorsService.create(createMembroSetorDto);
  }

  @Get()
  findAll() {
    return this.membroSetorsService.findAll();
  }

  @Get(':setorId/:membroId')
  findOne(
    @Param('setorId') setorId: number,
    @Param('membroSetorId') membroSetorId: number,
  ) {
    return this.membroSetorsService.findOne(setorId, membroSetorId);
  }

  @Patch(':setorId/:membroSetorId')
  update(
    @Param('setorId') setorId: number,
    @Param('membroSetorId') membroSetorId: number,
    @Body() updateMembroSetorDto: UpdateMembroSetorDto,
  ) {
    return this.membroSetorsService.update(
      setorId,
      membroSetorId,
      updateMembroSetorDto,
    );
  }

  @HttpCode(204)
  @Delete(':setorId/:membroSetorId')
  remove(
    @Param('setorId') setorId: number,
    @Param('membroSetorId') membroSetorId: number,
  ) {
    return this.membroSetorsService.remove(setorId, membroSetorId);
  }
}
