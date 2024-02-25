import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSacramentoDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  localSacramento: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  dataHoraSacramento: Date;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @IsNumber()
  pessoaId: number;

  @IsNotEmpty()
  @IsInt()
  @IsNumber()
  @IsPositive()
  tipoSacramentoId: number;
}
