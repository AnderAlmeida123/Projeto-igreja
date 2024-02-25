import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMembroSetorDto {
  @Type(() => Date)
  @IsNotEmpty()
  @IsDate()
  dataEntrada: Date;

  @Type(() => Date)
  @IsDate()
  dataSaida?: Date;

  @IsInt()
  @IsNotEmpty()
  @IsNumber()
  setorId: number;

  @IsInt()
  @IsNotEmpty()
  @IsNumber()
  membroSetorId: number;
}
