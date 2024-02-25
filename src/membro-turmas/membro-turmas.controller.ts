import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MembroTurmasService } from './membro-turmas.service';
import { CreateMembroTurmaDto } from './dto/create-membro-turma.dto';
import { UpdateMembroTurmaDto } from './dto/update-membro-turma.dto';

@Controller('membro-turmas')
export class MembroTurmasController {
  constructor(private readonly membroTurmasService: MembroTurmasService) {}

  @Post()
  create(@Body() createMembroTurmaDto: CreateMembroTurmaDto) {
    return this.membroTurmasService.create(createMembroTurmaDto);
  }

  @Get()
  findAll() {
    return this.membroTurmasService.findAll();
  }

  @Get(':turmaId/:membroId')
  findOne(
    @Param('turmaId') turmaId: number,
    @Param('membroId') membroId: number,
  ) {
    return this.membroTurmasService.findOne(turmaId, membroId);
  }

  @Patch(':turmaId/:membroId')
  update(
    @Param('turmaId') turmaId: number,
    @Param('membroId') membroId: number,
    @Body() updateMembroTurmaDto: UpdateMembroTurmaDto,
  ) {
    return this.membroTurmasService.update(
      turmaId,
      membroId,
      updateMembroTurmaDto,
    );
  }

  @Delete(':turmaId/:membroId')
  remove(
    @Param('turmaId') turmaId: number,
    @Param('membroId') membroId: number,
  ) {
    return this.membroTurmasService.remove(turmaId, membroId);
  }
}
