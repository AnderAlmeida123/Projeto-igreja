import { PartialType } from '@nestjs/mapped-types';
import { CreateTesourariaDto } from './create-tesouraria.dto';

export class UpdateTesourariaDto extends PartialType(CreateTesourariaDto) {}
