import { PartialType } from '@nestjs/mapped-types';
import { CreateMembroSetorDto } from './create-membro-setor.dto';

export class UpdateMembroSetorDto extends PartialType(CreateMembroSetorDto) {}
