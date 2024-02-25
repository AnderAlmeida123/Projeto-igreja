import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';
export class CreateComunidadeDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  nomeComunidade: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsOptional()
  @IsPositive()
  @IsInt()
  responsavelId?: number;
}
