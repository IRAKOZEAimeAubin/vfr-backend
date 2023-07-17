/*
  Warnings:

  - You are about to drop the column `monthlySavings` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `Savings` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `Savings` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Savings` table. All the data in the column will be lost.
  - Added the required column `monthlyPledge` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPledge` to the `Savings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" DROP COLUMN "monthlySavings",
ADD COLUMN     "monthlyPledge" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Savings" DROP COLUMN "amount",
DROP COLUMN "comment",
DROP COLUMN "date",
ADD COLUMN     "memberId" TEXT,
ADD COLUMN     "totalPledge" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "active" BOOLEAN DEFAULT true;

-- CreateTable
CREATE TABLE "TotalSavings" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TotalSavings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Savings" ADD CONSTRAINT "Savings_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
