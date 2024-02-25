import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateDizimoDto {
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  meses: string;

  @IsNumber()
  @IsPositive()
  valor: string;

  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  tipoPagamento: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @IsInt()
  pessoaId?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @IsInt()
  responsavelId?: number;
}
