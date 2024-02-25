-- DropForeignKey
ALTER TABLE "comunidade" DROP CONSTRAINT "comunidade_responsavelId_fkey";

-- AddForeignKey
ALTER TABLE "comunidade" ADD CONSTRAINT "comunidade_responsavelId_fkey" FOREIGN KEY ("responsavelId") REFERENCES "pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
