/*
  Warnings:

  - You are about to drop the column `content` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Service` table. All the data in the column will be lost.
  - Added the required column `imageId` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `previewContent` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complexity` to the `SubService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `SubService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `SubService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discounts` to the `SubService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimated_hours_times_fifty_percent` to the `SubService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimated_hours_times_one_hundred_percent` to the `SubService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageId` to the `SubService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overheadCost` to the `SubService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricingModel` to the `SubService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceDeliverables` to the `SubService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceUsageScore` to the `SubService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillLevel` to the `SubService` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `SubService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Service` DROP COLUMN `content`,
    DROP COLUMN `imageUrl`,
    ADD COLUMN `imageId` VARCHAR(191) NOT NULL,
    ADD COLUMN `previewContent` TEXT NOT NULL,
    MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `SubService` ADD COLUMN `complexity` INTEGER NOT NULL,
    ADD COLUMN `department` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` TEXT NOT NULL,
    ADD COLUMN `discounts` VARCHAR(191) NOT NULL,
    ADD COLUMN `estimated_hours_times_fifty_percent` INTEGER NOT NULL,
    ADD COLUMN `estimated_hours_times_one_hundred_percent` INTEGER NOT NULL,
    ADD COLUMN `imageId` VARCHAR(191) NOT NULL,
    ADD COLUMN `overheadCost` INTEGER NOT NULL,
    ADD COLUMN `pricingModel` VARCHAR(191) NOT NULL,
    ADD COLUMN `serviceDeliverables` VARCHAR(191) NOT NULL,
    ADD COLUMN `serviceUsageScore` INTEGER NOT NULL,
    ADD COLUMN `skillLevel` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `_ServiceToTag` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ServiceToTag_AB_unique`(`A`, `B`),
    INDEX `_ServiceToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ServiceToSubService` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ServiceToSubService_AB_unique`(`A`, `B`),
    INDEX `_ServiceToSubService_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_SubServiceToTag` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_SubServiceToTag_AB_unique`(`A`, `B`),
    INDEX `_SubServiceToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Service_imageId_idx` ON `Service`(`imageId`);

-- CreateIndex
CREATE INDEX `SubService_imageId_idx` ON `SubService`(`imageId`);
