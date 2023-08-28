/*
  Warnings:

  - The primary key for the `LoanType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `LoanType` table. All the data in the column will be lost.
  - The primary key for the `Member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Member` table. All the data in the column will be lost.
  - Added the required column `comment` to the `Savings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_loanTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_memberId_fkey";

-- DropForeignKey
ALTER TABLE "Savings" DROP CONSTRAINT "Savings_memberId_fkey";

-- DropIndex
DROP INDEX "LoanType_loanId_key";

-- DropIndex
DROP INDEX "Member_regNumber_key";

-- AlterTable
ALTER TABLE "Loan" ADD COLUMN     "approvalOfficerId" TEXT,
ADD COLUMN     "creatorId" TEXT;

-- AlterTable
ALTER TABLE "LoanType" DROP CONSTRAINT "LoanType_pkey",
DROP COLUMN "id",
ADD COLUMN     "creatorId" TEXT,
ADD CONSTRAINT "LoanType_pkey" PRIMARY KEY ("loanId");

-- AlterTable
ALTER TABLE "Member" DROP CONSTRAINT "Member_pkey",
DROP COLUMN "id",
ADD COLUMN     "creatorId" TEXT,
ADD CONSTRAINT "Member_pkey" PRIMARY KEY ("regNumber");

-- AlterTable
ALTER TABLE "Savings" ADD COLUMN     "comment" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TotalSavings" ADD COLUMN     "approvalOfficerId" TEXT,
ADD COLUMN     "creatorId" TEXT;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanType" ADD CONSTRAINT "LoanType_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("regNumber") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_loanTypeId_fkey" FOREIGN KEY ("loanTypeId") REFERENCES "LoanType"("loanId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_approvalOfficerId_fkey" FOREIGN KEY ("approvalOfficerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Savings" ADD CONSTRAINT "Savings_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("regNumber") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotalSavings" ADD CONSTRAINT "TotalSavings_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TotalSavings" ADD CONSTRAINT "TotalSavings_approvalOfficerId_fkey" FOREIGN KEY ("approvalOfficerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
