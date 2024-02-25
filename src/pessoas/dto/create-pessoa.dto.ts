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

export class CreatePessoaDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  nome: string;

  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  dataNascimento: Date;

  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  sexo: string;

  @IsOptional()
  @IsInt()
  @IsNumber()
  @IsPositive()
  comunidadeId?: number;
}
