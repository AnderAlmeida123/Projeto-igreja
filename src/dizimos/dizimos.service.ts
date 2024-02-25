import { Injectable } from '@nestjs/common';
import { CreateDizimoDto } from './dto/create-dizimo.dto';
import { UpdateDizimoDto } from './dto/update-dizimo.dto';

@Injectable()
export class DizimosService {
  create(createDizimoDto: CreateDizimoDto) {
    return 'This action adds a new dizimo';
  }

  findAll() {
    return `This action returns all dizimos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dizimo`;
  }

  update(id: number, updateDizimoDto: UpdateDizimoDto) {
    return `This action updates a #${id} dizimo`;
  }

  remove(id: number) {
    return `This action removes a #${id} dizimo`;
  }
}
