/*
  Warnings:

  - Made the column `cpf` on table `pessoa` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "pessoa" ALTER COLUMN "cpf" SET NOT NULL,
ALTER COLUMN "cpf" SET DATA TYPE CHAR(11);
