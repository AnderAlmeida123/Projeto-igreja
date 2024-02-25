import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateContatoDto {
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  celular: string;

  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  telContato: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  pessoaId: number;
}
