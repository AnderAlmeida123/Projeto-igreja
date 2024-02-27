import { Injectable, Catch } from '@nestjs/common';
import { CreateDizimoDto } from './dto/create-dizimo.dto';
import { UpdateDizimoDto } from './dto/update-dizimo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class DizimosService {
  constructor(private prismaService: PrismaService) {}
  async create(createDizimoDto: CreateDizimoDto) {
    if (createDizimoDto.pessoaId) {
      const pessoaMembro = await this.prismaService.pessoa.findUnique({
        where: { id: createDizimoDto.pessoaId },
      });
      if (!pessoaMembro) {
        throw new NotFoundError('Member people not found');
      }
    }

    if (createDizimoDto.responsavelId) {
      const responsavel = await this.prismaService.pessoa.findUnique({
        where: { id: createDizimoDto.responsavelId },
      });
      if (!responsavel) {
        throw new NotFoundError('People not found');
      }
    }

    const create = await this.prismaService.$transaction([
      this.prismaService.dizimo.create({
        data: {
          meses: createDizimoDto.meses,
          valor: createDizimoDto.valor,
          tipoPagamento: createDizimoDto.tipoPagamento,
          pessoaId: createDizimoDto.pessoaId,
          responsavelId: createDizimoDto.responsavelId,
        },
      }),
    ]);
    return create[0];
  }

  findAll() {
    return this.prismaService.dizimo.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.dizimo.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Tithe with ID ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updateDizimoDto: UpdateDizimoDto) {
    try {
      return await this.prismaService.dizimo.update({
        where: { id },
        data: updateDizimoDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Tithe with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.dizimo.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Tithe with ID ${id} not found`);
      }
      throw error;
    }
  }
}
