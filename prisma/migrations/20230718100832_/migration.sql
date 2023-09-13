/*
  Warnings:

  - You are about to drop the column `blogId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Tag_blogId_idx` ON `Tag`;

-- AlterTable
ALTER TABLE `Product` MODIFY `shippingReturnPolicy` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `Tag` DROP COLUMN `blogId`;
