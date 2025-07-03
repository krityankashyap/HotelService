/*
  Warnings:

  - You are about to alter the column `rating_Count` on the `Hotel` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `Hotel` MODIFY `rating_Count` INTEGER NULL;
