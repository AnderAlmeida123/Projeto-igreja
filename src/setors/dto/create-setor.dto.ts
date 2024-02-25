import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSetorDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  setor: string;

  @IsOptional()
  @IsNumber()
  @IsInt()
  @IsPositive()
  responsavelId?: number;

  @IsInt()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  comunidadeId: number;
}
