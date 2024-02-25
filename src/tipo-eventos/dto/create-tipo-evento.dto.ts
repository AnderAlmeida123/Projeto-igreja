import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreateTipoEventoDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  tipoEvento: string;
}
