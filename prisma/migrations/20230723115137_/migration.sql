/*
  Warnings:

  - You are about to drop the column `images` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `sub_title` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `verified_customer` on the `Review` table. All the data in the column will be lost.
  - Added the required column `subTitle` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Made the column `featured` on table `Blog` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `userId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Blog` DROP COLUMN `images`,
    DROP COLUMN `sub_title`,
    ADD COLUMN `subTitle` VARCHAR(191) NOT NULL,
    MODIFY `featured` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Review` DROP COLUMN `verified_customer`,
    ADD COLUMN `productId` VARCHAR(191) NULL,
    ADD COLUMN `reviewType` ENUM('MAIN', 'PRODUCT', 'SERVICE') NOT NULL DEFAULT 'MAIN',
    ADD COLUMN `serviceId` VARCHAR(191) NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    ADD COLUMN `verifiedCustomer` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `_BlogToImage` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_BlogToImage_AB_unique`(`A`, `B`),
    INDEX `_BlogToImage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Review_productId_idx` ON `Review`(`productId`);

-- CreateIndex
CREATE INDEX `Review_serviceId_idx` ON `Review`(`serviceId`);

-- CreateIndex
CREATE INDEX `Review_userId_idx` ON `Review`(`userId`);
