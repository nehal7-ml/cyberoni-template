/*
  Warnings:

  - You are about to drop the column `image` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_ServiceToSubService` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `serviceId` to the `SubService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Review` DROP COLUMN `image`,
    ADD COLUMN `gptPromptId` VARCHAR(191) NULL,
    ADD COLUMN `imageId` VARCHAR(191) NULL,
    MODIFY `reviewType` ENUM('MAIN', 'PRODUCT', 'SERVICE', 'PROMPT') NOT NULL DEFAULT 'MAIN';

-- AlterTable
ALTER TABLE `SubService` ADD COLUMN `serviceId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `image`,
    ADD COLUMN `imageId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `_ServiceToSubService`;

-- CreateTable
CREATE TABLE `GptPrompt` (
    `id` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `prompt` TEXT NOT NULL,
    `temperature` INTEGER NOT NULL DEFAULT 0,
    `max_tokens` INTEGER NOT NULL DEFAULT 0,
    `top_p` INTEGER NOT NULL DEFAULT 0,
    `best_of` INTEGER NOT NULL DEFAULT 0,
    `frequency_penalty` INTEGER NOT NULL DEFAULT 0,
    `presence_penalty` INTEGER NOT NULL DEFAULT 0,
    `stop` TEXT NOT NULL,
    `timesUsed` INTEGER NOT NULL DEFAULT 0,
    `timesIntegrated` INTEGER NOT NULL DEFAULT 0,
    `costPerToken` INTEGER NOT NULL DEFAULT 0,
    `profitMargin` INTEGER NOT NULL DEFAULT 0,
    `imageId` VARCHAR(191) NULL,

    INDEX `GptPrompt_imageId_idx`(`imageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `imageId` VARCHAR(191) NULL,
    `eventLink` TEXT NOT NULL,
    `status` ENUM('UPCOMING', 'CANCELLED', 'COMPLETED') NOT NULL,
    `isVirtual` BOOLEAN NOT NULL,

    INDEX `Event_imageId_idx`(`imageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GptPromptToTag` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_GptPromptToTag_AB_unique`(`A`, `B`),
    INDEX `_GptPromptToTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Review_imageId_idx` ON `Review`(`imageId`);

-- CreateIndex
CREATE INDEX `Review_gptPromptId_idx` ON `Review`(`gptPromptId`);

-- CreateIndex
CREATE INDEX `SubService_serviceId_idx` ON `SubService`(`serviceId`);

-- CreateIndex
CREATE UNIQUE INDEX `Tag_name_key` ON `Tag`(`name`);

-- CreateIndex
CREATE INDEX `User_imageId_idx` ON `User`(`imageId`);
