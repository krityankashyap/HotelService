/*
  Warnings:

  - Added the required column `deleted_at` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating_Count` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Hotel` ADD COLUMN `deleted_at` DATETIME(3) NOT NULL,
    ADD COLUMN `rating_Count` BIGINT NOT NULL,
    ADD COLUMN `ratings` DECIMAL(3, 2) NULL DEFAULT 0.00;
