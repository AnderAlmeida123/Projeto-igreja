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
import { CalendariosService } from './calendarios.service';
import { CreateCalendarioDto } from './dto/create-calendario.dto';
import { UpdateCalendarioDto } from './dto/update-calendario.dto';

@Controller('calendarios')
export class CalendariosController {
  constructor(private readonly calendariosService: CalendariosService) {}

  @Post()
  create(@Body() createCalendarioDto: CreateCalendarioDto) {
    return this.calendariosService.create(createCalendarioDto);
  }

  @Get()
  findAll() {
    return this.calendariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calendariosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCalendarioDto: UpdateCalendarioDto,
  ) {
    return this.calendariosService.update(+id, updateCalendarioDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calendariosService.remove(+id);
  }
}
