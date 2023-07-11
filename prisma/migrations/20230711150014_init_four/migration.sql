/*
  Warnings:

  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Member";

-- CreateTable
CREATE TABLE "Members" (
    "id" TEXT NOT NULL,
    "regNumber" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "monthlySavings" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Members_regNumber_key" ON "Members"("regNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Members_phone_key" ON "Members"("phone");
