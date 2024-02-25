import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCalendarioDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  dataHora: Date;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  tituloEvento: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsPositive()
  @IsInt()
  comunidadeId: number;

  @IsPositive()
  @IsInt()
  tipoEventoId: number;
}
