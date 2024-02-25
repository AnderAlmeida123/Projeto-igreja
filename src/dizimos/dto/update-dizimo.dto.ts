import { PartialType } from '@nestjs/mapped-types';
import { CreateDizimoDto } from './create-dizimo.dto';

export class UpdateDizimoDto extends PartialType(CreateDizimoDto) {}
