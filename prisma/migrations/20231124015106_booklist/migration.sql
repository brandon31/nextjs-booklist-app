/*
  Warnings:

  - You are about to drop the column `number` on the `booklist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `booklist` DROP COLUMN `number`,
    ADD COLUMN `bookNumber` VARCHAR(255) NOT NULL DEFAULT '23232323';
