/*
  Warnings:

  - You are about to drop the column `active` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "active" BOOLEAN DEFAULT true;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "active";
