import { Injectable } from '@nestjs/common';
import { CreateMembroTurmaDto } from './dto/create-membro-turma.dto';
import { UpdateMembroTurmaDto } from './dto/update-membro-turma.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class MembroTurmasService {
  constructor(private prismaService: PrismaService) {}
  async create(createMembroTurmaDto: CreateMembroTurmaDto) {
    const create = await this.prismaService.$transaction([
      this.prismaService.membroTurma.create({
        data: {
          turmaId: createMembroTurmaDto.turmaId,
          membroId: createMembroTurmaDto.membroId,
          status: createMembroTurmaDto.status,
        },
      }),
    ]);
    return create[0];
  }

  findAll() {
    return this.prismaService.membroTurma.findMany();
  }

  async findOne(turmaId: number, membroId: number) {
    try {
      const findOne = await this.prismaService.membroTurma.findFirst({
        where: {
          AND: [
            {
              turmaId,
            },
            {
              membroId,
            },
          ],
        },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(
          `Member ID ${membroId} does not exist in Class ID ${turmaId}`,
        );
      }
      throw error;
    }
  }

  async update(
    turmaId: number,
    membroId: number,
    updateMembroTurmaDto: UpdateMembroTurmaDto,
  ) {
    try {
      const update = await this.prismaService.membroTurma.updateMany({
        where: {
          AND: [
            {
              turmaId,
            },
            {
              membroId,
            },
          ],
        },
        data: updateMembroTurmaDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(
          `Member ID ${membroId} does not exist in Class ID ${turmaId}`,
        );
      }
      throw error;
    }
  }

  async remove(turmaId: number, membroId: number) {
    try {
      const del = await this.prismaService.membroTurma.deleteMany({
        where: {
          AND: [
            {
              turmaId,
            },
            {
              membroId,
            },
          ],
        },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(
          `Member ID ${membroId} does not exist in Class ID ${turmaId}`,
        );
      }
      throw error;
    }
  }
}
