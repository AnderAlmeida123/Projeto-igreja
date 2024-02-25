/*
  Warnings:

  - The `cpf` column on the `pessoa` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "pessoa" DROP COLUMN "cpf",
ADD COLUMN     "cpf" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_cpf_key" ON "pessoa"("cpf");
