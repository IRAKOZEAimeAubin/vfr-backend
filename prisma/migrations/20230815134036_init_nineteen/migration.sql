/*
  Warnings:

  - Made the column `active` on table `Member` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Loan" ALTER COLUMN "approved" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Member" ALTER COLUMN "active" SET NOT NULL;

-- AlterTable
ALTER TABLE "TotalSavings" ALTER COLUMN "approved" DROP DEFAULT;
