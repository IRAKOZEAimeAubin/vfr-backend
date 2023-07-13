/*
  Warnings:

  - Added the required column `updatedAt` to the `Loan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Savings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Loan" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "loanTypeId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Savings" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "LoanType" (
    "id" TEXT NOT NULL,
    "loanId" TEXT NOT NULL,
    "typeName" TEXT NOT NULL,
    "interestRate" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoanType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LoanType_loanId_key" ON "LoanType"("loanId");

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_loanTypeId_fkey" FOREIGN KEY ("loanTypeId") REFERENCES "LoanType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
