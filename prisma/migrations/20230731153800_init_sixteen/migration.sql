/*
  Warnings:

  - You are about to drop the column `status` on the `TotalSavings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Loan" ADD COLUMN     "approved" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "TotalSavings" DROP COLUMN "status",
ADD COLUMN     "approved" BOOLEAN DEFAULT false;
