import { Injectable } from '@nestjs/common';
import { CreateTesourariaDto } from './dto/create-tesouraria.dto';
import { UpdateTesourariaDto } from './dto/update-tesouraria.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class TesourariasService {
  constructor(private prismaService: PrismaService) {}
  async create(createTesourariaDto: CreateTesourariaDto) {
    if (createTesourariaDto.comunidadeId) {
      const comunidade = await this.prismaService.comunidade.findUnique({
        where: { id: createTesourariaDto.comunidadeId },
      });
      if (!comunidade) {
        throw new NotFoundError('Community not found');
      }
    }

    if (createTesourariaDto.responsavelId) {
      const responsavel = await this.prismaService.pessoa.findUnique({
        where: { id: createTesourariaDto.responsavelId },
      });
      if (!responsavel) {
        throw new NotFoundError('People not found');
      }
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.tesouraria.create({
        data: {
          tipoMovimentacao: createTesourariaDto.tipoMovimentacao,
          descricao: createTesourariaDto.descricao,
          valor: createTesourariaDto.valor,
          dataMovimentacao: createTesourariaDto.dataMovimentacao,
          comunidadeId: createTesourariaDto.comunidadeId,
          responsavelId: createTesourariaDto.responsavelId,
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.tesouraria.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.tesouraria.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Treasury with ID ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updateTesourariaDto: UpdateTesourariaDto) {
    try {
      return await this.prismaService.tesouraria.update({
        where: { id },
        data: updateTesourariaDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Treasury with ID ${id} not found `);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.tesouraria.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Treasury with ID ${id} not found`);
      }
      throw error;
    }
  }
}
