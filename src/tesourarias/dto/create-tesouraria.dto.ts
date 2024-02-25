import { Type } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateTesourariaDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  tipoMovimentacao: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  valor: number;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  dataMovimentacao: Date;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  @IsPositive()
  comunidadeId: number;

  @IsOptional()
  @IsNumber()
  @IsInt()
  @IsPositive()
  responsavelId?: number;
}
