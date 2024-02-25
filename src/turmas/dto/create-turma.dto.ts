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
export class CreateTurmaDto {
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  dataInicio: Date;

  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  dataTermino: Date;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  turma: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @IsInt()
  professorId?: number;

  @IsPositive()
  @IsNumber()
  @IsInt()
  @IsNotEmpty()
  setorId: number;
}
