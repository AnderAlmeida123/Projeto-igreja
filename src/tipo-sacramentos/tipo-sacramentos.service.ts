import { Injectable } from '@nestjs/common';
import { CreateTipoSacramentoDto } from './dto/create-tipo-sacramento.dto';
import { UpdateTipoSacramentoDto } from './dto/update-tipo-sacramento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class TipoSacramentosService {
  constructor(private prismaService: PrismaService) {}
  async create(createTipoSacramentoDto: CreateTipoSacramentoDto) {
    const type = await this.prismaService.$transaction([
      this.prismaService.tipoSacramento.create({
        data: {
          tipoSacramento: createTipoSacramentoDto.tipoSacramento,
        },
      }),
    ]);
    return type[0];
  }

  findAll() {
    return this.prismaService.tipoSacramento.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.tipoSacramento.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Type sacrament with id ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updateTipoSacramentoDto: UpdateTipoSacramentoDto) {
    try {
      return await this.prismaService.tipoSacramento.update({
        where: { id },
        data: updateTipoSacramentoDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Type sacrament with id ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.tipoSacramento.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Type sacrament with id ${id} not found`);
      }
      throw error;
    }
  }
}
