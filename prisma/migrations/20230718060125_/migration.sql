/*
  Warnings:

  - You are about to drop the column `type` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Account` DROP COLUMN `type`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` ENUM('ADMIN', 'OWNER', 'USER') NOT NULL DEFAULT 'USER';
