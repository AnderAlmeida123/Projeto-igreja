import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class EnderecosService {
  constructor(private prismaService: PrismaService) {}

  async create(createEnderecoDto: CreateEnderecoDto) {
    const pessoa = await this.prismaService.pessoa.findUnique({
      where: {
        id: createEnderecoDto.pessoaId,
      },
    });
    if (!pessoa) {
      throw new NotFoundError('People not found');
    }

    const result = await this.prismaService.$transaction([
      this.prismaService.endereco.create({
        data: {
          cep: createEnderecoDto.cep,
          estado: createEnderecoDto.estado,
          cidade: createEnderecoDto.cidade,
          bairro: createEnderecoDto.bairro,
          rua: createEnderecoDto.rua,
          numero: createEnderecoDto.numero,
          referencia: createEnderecoDto.referencia,
          pessoaId: createEnderecoDto.pessoaId,
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.endereco.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.endereco.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Adress with ID ${id} not found`);
      }
      throw error;
    }
  }

  async update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
    try {
      return await this.prismaService.endereco.update({
        where: { id },
        data: updateEnderecoDto,
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Adress with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.endereco.delete({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        throw new NotFoundError(`Adress with ID ${id} not found`);
      }
      throw error;
    }
  }
}
