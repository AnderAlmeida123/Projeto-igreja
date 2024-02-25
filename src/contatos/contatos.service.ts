import { Injectable } from '@nestjs/common';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class ContatosService {
  constructor(private prismaService: PrismaService) {}

  async create(createContatoDto: CreateContatoDto) {
    const pessoa = await this.prismaService.pessoa.findUnique({
      where: { id: createContatoDto.pessoaId },
    });
    if (!pessoa) {
      throw new NotFoundError('People not found');
    }

    const contato = await this.prismaService.$transaction([
      this.prismaService.contato.create({
        data: {
          celular: createContatoDto.celular,
          telContato: createContatoDto.telContato,
          email: createContatoDto.email,
          pessoaId: createContatoDto.pessoaId,
        },
      }),
    ]);
    return contato[0];
  }

  findAll() {
    return this.prismaService.contato.findMany();
  }

  async findOne(id: number) {
    try {
      await this.prismaService.contato.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Contact with ID ${id} not found`);
      }
    }
  }

  async update(id: number, updateContatoDto: UpdateContatoDto) {
    try {
      await this.prismaService.contato.update({
        where: { id },
        data: updateContatoDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Contact with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      await this.prismaService.contato.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Contact with ID ${id} not found`);
      }
    }
  }
}
