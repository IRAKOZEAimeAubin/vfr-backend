/*
  Warnings:

  - You are about to drop the column `savings` on the `Savings` table. All the data in the column will be lost.
  - Added the required column `currentSavings` to the `Savings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previousSavings` to the `Savings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Savings" DROP COLUMN "savings",
ADD COLUMN     "currentSavings" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "previousSavings" DOUBLE PRECISION NOT NULL;
