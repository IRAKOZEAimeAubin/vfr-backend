/*
  Warnings:

  - Added the required column `totalPledge` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `TotalSavings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "totalPledge" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "TotalSavings" ADD COLUMN     "status" BOOLEAN NOT NULL;
