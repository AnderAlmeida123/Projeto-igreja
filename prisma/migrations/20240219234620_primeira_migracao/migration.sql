-- CreateTable
CREATE TABLE "pessoa" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "cpf" CHAR(11) NOT NULL,
    "dataNascimento" DATE NOT NULL,
    "sexo" TEXT NOT NULL,
    "comunidadeId" INTEGER,

    CONSTRAINT "pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contato" (
    "id" SERIAL NOT NULL,
    "celular" CHAR(11) NOT NULL,
    "telContato" CHAR(11) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "pessoaId" INTEGER NOT NULL,

    CONSTRAINT "contato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "endereco" (
    "id" SERIAL NOT NULL,
    "cep" CHAR(9) NOT NULL,
    "estado" VARCHAR(255) NOT NULL,
    "cidade" VARCHAR(255) NOT NULL,
    "bairro" VARCHAR(255) NOT NULL,
    "rua" VARCHAR(255) NOT NULL,
    "numero" CHAR(5) NOT NULL,
    "referencia" TEXT,
    "pessoaId" INTEGER NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sacramento" (
    "id" SERIAL NOT NULL,
    "localSacramento" TEXT NOT NULL,
    "dataHoraSacramento" TIMESTAMP NOT NULL,
    "pessoaId" INTEGER NOT NULL,
    "tipoSacramentoId" INTEGER NOT NULL,

    CONSTRAINT "sacramento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoSacramento" (
    "id" SERIAL NOT NULL,
    "tipoSacramento" VARCHAR(255) NOT NULL,

    CONSTRAINT "tipoSacramento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comunidade" (
    "id" SERIAL NOT NULL,
    "nomeComunidade" VARCHAR(100) NOT NULL,
    "bairro" VARCHAR(100) NOT NULL,
    "responsavelId" INTEGER,

    CONSTRAINT "comunidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendario" (
    "id" SERIAL NOT NULL,
    "dataHora" TIMESTAMP NOT NULL,
    "tituloEvento" VARCHAR(255) NOT NULL,
    "descricao" TEXT NOT NULL,
    "comunidadeId" INTEGER NOT NULL,
    "tipoEventoId" INTEGER NOT NULL,

    CONSTRAINT "calendario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoEvento" (
    "id" SERIAL NOT NULL,
    "tipoEvento" VARCHAR(255) NOT NULL,

    CONSTRAINT "tipoEvento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "setor" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "setor" VARCHAR(255) NOT NULL,
    "responsavelId" INTEGER,
    "comunidadeId" INTEGER NOT NULL,

    CONSTRAINT "setor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membroSetor" (
    "dataEntrada" DATE NOT NULL,
    "dataSaida" DATE,
    "setorId" INTEGER NOT NULL,
    "membroSetorId" INTEGER NOT NULL,

    CONSTRAINT "membroSetor_pkey" PRIMARY KEY ("setorId","membroSetorId")
);

-- CreateTable
CREATE TABLE "turma" (
    "id" SERIAL NOT NULL,
    "dataInicio" DATE NOT NULL,
    "dataTermino" DATE NOT NULL,
    "turma" VARCHAR(255) NOT NULL,
    "professorId" INTEGER,
    "setorId" INTEGER NOT NULL,

    CONSTRAINT "turma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membroTurma" (
    "turmaId" INTEGER NOT NULL,
    "membroId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "membroTurma_pkey" PRIMARY KEY ("turmaId","membroId")
);

-- CreateTable
CREATE TABLE "tesouraria" (
    "id" SERIAL NOT NULL,
    "tipoMovimentacao" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" MONEY NOT NULL,
    "dataMovimentacao" DATE NOT NULL,
    "comunidadeId" INTEGER NOT NULL,
    "responsavelId" INTEGER,

    CONSTRAINT "tesouraria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dizimo" (
    "id" SERIAL NOT NULL,
    "meses" VARCHAR(255) NOT NULL,
    "valor" MONEY NOT NULL,
    "tipoPagamento" VARCHAR(255) NOT NULL,
    "pessoaId" INTEGER,
    "responsavelId" INTEGER,

    CONSTRAINT "dizimo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estoque" (
    "id" SERIAL NOT NULL,
    "produto" VARCHAR(255) NOT NULL,
    "quantidade" DECIMAL NOT NULL,
    "setorId" INTEGER,
    "responsavelId" INTEGER,
    "comunidadeId" INTEGER NOT NULL,

    CONSTRAINT "estoque_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_id_key" ON "pessoa"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_cpf_key" ON "pessoa"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "contato_id_key" ON "contato"("id");

-- CreateIndex
CREATE UNIQUE INDEX "endereco_id_key" ON "endereco"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sacramento_id_key" ON "sacramento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipoSacramento_id_key" ON "tipoSacramento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "comunidade_id_key" ON "comunidade"("id");

-- CreateIndex
CREATE UNIQUE INDEX "calendario_id_key" ON "calendario"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tipoEvento_id_key" ON "tipoEvento"("id");

-- CreateIndex
CREATE UNIQUE INDEX "setor_id_key" ON "setor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "setor_setor_key" ON "setor"("setor");

-- CreateIndex
CREATE UNIQUE INDEX "turma_id_key" ON "turma"("id");

-- CreateIndex
CREATE UNIQUE INDEX "turma_turma_key" ON "turma"("turma");

-- CreateIndex
CREATE UNIQUE INDEX "tesouraria_id_key" ON "tesouraria"("id");

-- CreateIndex
CREATE UNIQUE INDEX "dizimo_id_key" ON "dizimo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "estoque_id_key" ON "estoque"("id");

-- AddForeignKey
ALTER TABLE "pessoa" ADD CONSTRAINT "pessoa_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contato" ADD CONSTRAINT "contato_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramento" ADD CONSTRAINT "sacramento_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramento" ADD CONSTRAINT "sacramento_tipoSacramentoId_fkey" FOREIGN KEY ("tipoSacramentoId") REFERENCES "tipoSacramento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunidade" ADD CONSTRAINT "comunidade_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendario" ADD CONSTRAINT "calendario_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendario" ADD CONSTRAINT "calendario_tipoEventoId_fkey" FOREIGN KEY ("tipoEventoId") REFERENCES "tipoEvento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setor" ADD CONSTRAINT "setor_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setor" ADD CONSTRAINT "setor_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroSetor" ADD CONSTRAINT "membroSetor_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroSetor" ADD CONSTRAINT "membroSetor_membroSetorId_fkey" FOREIGN KEY ("membroSetorId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "turma" ADD CONSTRAINT "turma_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroTurma" ADD CONSTRAINT "membroTurma_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membroTurma" ADD CONSTRAINT "membroTurma_membroId_fkey" FOREIGN KEY ("membroId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tesouraria" ADD CONSTRAINT "tesouraria_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tesouraria" ADD CONSTRAINT "tesouraria_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dizimo" ADD CONSTRAINT "dizimo_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dizimo" ADD CONSTRAINT "dizimo_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_setorId_fkey" FOREIGN KEY ("setorId") REFERENCES "setor"("id") ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "comunidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
