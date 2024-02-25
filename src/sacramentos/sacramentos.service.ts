import { Injectable } from '@nestjs/common';
import { CreateSacramentoDto } from './dto/create-sacramento.dto';
import { UpdateSacramentoDto } from './dto/update-sacramento.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class SacramentosService {
  constructor(private prismaService: PrismaService) {}

  async create(createSacramentoDto: CreateSacramentoDto) {
    const pessoa = await this.prismaService.pessoa.findUnique({
      where: { id: createSacramentoDto.pessoaId },
    });
    if (!pessoa) {
      throw new NotFoundError('People not found');
    }
    const tipoSacramento = await this.prismaService.tipoSacramento.findUnique({
      where: { id: createSacramentoDto.tipoSacramentoId },
    });
    if (!tipoSacramento) {
      throw new NotFoundError('Type sacrament not found');
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.sacramento.create({
        data: {
          localSacramento: createSacramentoDto.localSacramento,
          dataHoraSacramento: createSacramentoDto.dataHoraSacramento,
          pessoaId: createSacramentoDto.pessoaId,
          tipoSacramentoId: createSacramentoDto.tipoSacramentoId,
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.sacramento.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.sacramento.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`sacrament with ID ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updateSacramentoDto: UpdateSacramentoDto) {
    try {
      return await this.prismaService.sacramento.update({
        where: { id },
        data: updateSacramentoDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`sacrament with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.sacramento.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`sacrament with ID ${id} not found`);
      }
      throw error;
    }
  }
}
