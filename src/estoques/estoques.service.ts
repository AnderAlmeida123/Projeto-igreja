import { Injectable } from '@nestjs/common';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class EstoquesService {
  constructor(private prismaService: PrismaService) {}

  async create(createEstoqueDto: CreateEstoqueDto) {
    const setor = await this.prismaService.setor.findUnique({
      where: { id: createEstoqueDto.setorId },
    });
    if (!setor) {
      throw new NotFoundError('Sector not found');
    }

    const responsavel = await this.prismaService.pessoa.findUnique({
      where: { id: createEstoqueDto.responsavelId },
    });
    if (!responsavel) {
      throw new NotFoundError('People not found');
    }

    const comunidade = await this.prismaService.comunidade.findUnique({
      where: { id: createEstoqueDto.comunidadeId },
    });
    if (!comunidade) {
      throw new NotFoundError('Community not found');
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.estoque.create({
        data: {
          produto: createEstoqueDto.produto,
          quantidade: createEstoqueDto.quantidade,
          setorId: createEstoqueDto.setorId,
          responsavelId: createEstoqueDto.responsavelId,
          comunidadeId: createEstoqueDto.comunidadeId,
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.estoque.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.estoque.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Stock with ID ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updateEstoqueDto: UpdateEstoqueDto) {
    try {
      await this.prismaService.estoque.update({
        where: { id },
        data: updateEstoqueDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Stock with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.prismaService.estoque.delete({
        where: { id },
      });
    } catch (error) {
      console.error;
      if (error.code === 'P2025') {
        throw new NotFoundError(`Stock with ID ${id} not found`);
      }
      throw error;
    }
  }
}
