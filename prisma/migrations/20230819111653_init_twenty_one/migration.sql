/*
  Warnings:

  - Added the required column `principal` to the `Loan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Loan" ADD COLUMN     "interest" DOUBLE PRECISION,
ADD COLUMN     "principal" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "amount" DROP NOT NULL;
