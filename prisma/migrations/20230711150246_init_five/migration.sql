/*
  Warnings:

  - You are about to drop the `Members` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Loan" ADD COLUMN     "memberId" TEXT;

-- DropTable
DROP TABLE "Members";

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "regNumber" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "monthlySavings" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_regNumber_key" ON "Member"("regNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Member_phone_key" ON "Member"("phone");

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
