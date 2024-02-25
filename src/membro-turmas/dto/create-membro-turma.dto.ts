import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
export class CreateMembroTurmaDto {
  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  turmaId: number;

  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  membroId: number;

  @MaxLength(255)
  @IsNotEmpty()
  @IsString()
  status: string;
}
