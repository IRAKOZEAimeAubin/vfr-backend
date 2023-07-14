/*
  Warnings:

  - You are about to drop the column `memberId` on the `Savings` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Loan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `installments` to the `Loan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `Loan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Savings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comment` to the `Savings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Savings" DROP CONSTRAINT "Savings_memberId_fkey";

-- AlterTable
ALTER TABLE "Loan" ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "installments" INTEGER NOT NULL,
ADD COLUMN     "reason" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Savings" DROP COLUMN "memberId",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
