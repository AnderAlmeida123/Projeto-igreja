import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoSacramentoDto } from './create-tipo-sacramento.dto';

export class UpdateTipoSacramentoDto extends PartialType(CreateTipoSacramentoDto) {}
