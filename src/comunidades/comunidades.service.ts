import { Injectable } from '@nestjs/common';
import { CreateComunidadeDto } from './dto/create-comunidade.dto';
import { UpdateComunidadeDto } from './dto/update-comunidade.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class ComunidadesService {
  constructor(private prismaService: PrismaService) {}
  async create(createComunidadeDto: CreateComunidadeDto) {
    if (createComunidadeDto.responsavelId) {
      const pessoa = await this.prismaService.pessoa.findUnique({
        where: { id: createComunidadeDto.responsavelId },
      });
      if (!pessoa) {
        throw new NotFoundError('People not found');
      }
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.comunidade.create({
        data: {
          nomeComunidade: createComunidadeDto.nomeComunidade,
          bairro: createComunidadeDto.bairro,
          responsavelId: createComunidadeDto.responsavelId,
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.comunidade.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.comunidade.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Community with ID ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updateComunidadeDto: UpdateComunidadeDto) {
    try {
      return await this.prismaService.comunidade.update({
        where: { id },
        data: updateComunidadeDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Community with ID ${id} not found`);
      }
      throw error;
    }
  }
  async remove(id: number) {
    try {
      return await this.prismaService.comunidade.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Community with ID ${id} not found`);
      }
      throw error;
    }
  }
}
