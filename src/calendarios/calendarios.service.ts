import { Injectable } from '@nestjs/common';
import { CreateCalendarioDto } from './dto/create-calendario.dto';
import { UpdateCalendarioDto } from './dto/update-calendario.dto';
import { NotFoundError } from 'src/errors';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CalendariosService {
  constructor(private prismaService: PrismaService) {}

  async create(createCalendarioDto: CreateCalendarioDto) {
    if (createCalendarioDto.tipoEventoId) {
      const tipoEvento = await this.prismaService.tipoEvento.findUniqueOrThrow({
        where: {
          id: createCalendarioDto.tipoEventoId,
        },
      });
      if (!tipoEvento) {
        throw new NotFoundError('type event not found');
      }
    }

    if (createCalendarioDto.comunidadeId) {
      const comunidade = await this.prismaService.comunidade.findUniqueOrThrow({
        where: {
          id: createCalendarioDto.comunidadeId,
        },
      });
      if (!comunidade) {
        throw new NotFoundError('community not found');
      }
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.calendario.create({
        data: {
          dataHora: createCalendarioDto.dataHora,
          tituloEvento: createCalendarioDto.tituloEvento,
          descricao: createCalendarioDto.descricao,
          comunidadeId: createCalendarioDto.comunidadeId,
          tipoEventoId: createCalendarioDto.tipoEventoId,
        },
      }),
    ]);
  }

  findAll() {
    return this.prismaService.calendario.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.calendario.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Calendar with ID ${id} not found`);
      }
    }
  }

  async update(id: number, updateCalendarioDto: UpdateCalendarioDto) {
    try {
      return await this.prismaService.calendario.update({
        where: { id },
        data: updateCalendarioDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Calendar with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.calendario.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Calendar with ID ${id} not found`);
      }
      throw error;
    }
  }
}
