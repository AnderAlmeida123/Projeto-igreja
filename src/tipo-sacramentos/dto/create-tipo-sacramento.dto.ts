import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTipoSacramentoDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  tipoSacramento: string;
}
