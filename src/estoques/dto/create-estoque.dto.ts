import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEstoqueDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  produto: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  quantidade: number;

  @IsOptional()
  @IsNumber()
  @IsInt()
  @IsPositive()
  setorId?: number;

  @IsOptional()
  @IsNumber()
  @IsInt()
  @IsPositive()
  responsavelId?: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  comunidadeId: number;
}
