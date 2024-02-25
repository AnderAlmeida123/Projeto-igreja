import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoEventosModule } from './tipo-eventos/tipo-eventos.module';
import { TipoSacramentosModule } from './tipo-sacramentos/tipo-sacramentos.module';
import { ComunidadesModule } from './comunidades/comunidades.module';
import { CalendariosModule } from './calendarios/calendarios.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { SacramentosModule } from './sacramentos/sacramentos.module';
import { SetorsModule } from './setors/setors.module';
import { TurmasModule } from './turmas/turmas.module';
import { TesourariasModule } from './tesourarias/tesourarias.module';
import { EstoquesModule } from './estoques/estoques.module';
import { DizimosModule } from './dizimos/dizimos.module';
import { ContatosModule } from './contatos/contatos.module';
import { MembroSetorsModule } from './membro-setors/membro-setors.module';
import { MembroTurmasModule } from './membro-turmas/membro-turmas.module';

@Module({
  imports: [TipoEventosModule, TipoSacramentosModule, ComunidadesModule, CalendariosModule, PessoasModule, EnderecosModule, SacramentosModule, SetorsModule, TurmasModule, TesourariasModule, EstoquesModule, DizimosModule, ContatosModule, MembroSetorsModule, MembroTurmasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
