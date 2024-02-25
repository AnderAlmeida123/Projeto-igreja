import { Injectable } from '@nestjs/common';
import { CreateTipoEventoDto } from './dto/create-tipo-evento.dto';
import { UpdateTipoEventoDto } from './dto/update-tipo-evento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class TipoEventosService {
  constructor(private prismaService: PrismaService) {}

  async create(createTipoEventoDto: CreateTipoEventoDto) {
    const result = await this.prismaService.$transaction([
      this.prismaService.tipoEvento.create({
        data: {
          tipoEvento: createTipoEventoDto.tipoEvento,
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.tipoEvento.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.tipoEvento.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Type event with ID ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updateTipoEventoDto: UpdateTipoEventoDto) {
    try {
      return await this.prismaService.tipoEvento.update({
        where: { id },
        data: updateTipoEventoDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Type event with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.tipoEvento.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Type event with ID ${id} not found`);
      }
      throw error;
    }
  }
}
