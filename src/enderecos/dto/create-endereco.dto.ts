import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEnderecoDto {
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  cep: string;

  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  estado: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  bairro: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  rua: string;

  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  numero: string;

  @IsOptional()
  @MaxLength(255)
  @IsString()
  referencia?: string;

  @IsPositive()
  @IsInt()
  @IsOptional()
  @IsNumber()
  pessoaId: number;
}
