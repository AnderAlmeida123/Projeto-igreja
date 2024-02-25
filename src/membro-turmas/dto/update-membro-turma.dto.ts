import { PartialType } from '@nestjs/mapped-types';
import { CreateMembroTurmaDto } from './create-membro-turma.dto';

export class UpdateMembroTurmaDto extends PartialType(CreateMembroTurmaDto) {}
