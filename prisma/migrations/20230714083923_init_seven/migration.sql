/*
  Warnings:

  - A unique constraint covering the columns `[typeName]` on the table `LoanType` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Savings" ADD COLUMN     "memberId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "LoanType_typeName_key" ON "LoanType"("typeName");

-- AddForeignKey
ALTER TABLE "Savings" ADD CONSTRAINT "Savings_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
