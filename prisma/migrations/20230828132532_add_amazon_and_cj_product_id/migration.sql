-- AlterTable
ALTER TABLE `Product` ADD COLUMN `amazonProductId` VARCHAR(191) NULL,
    ADD COLUMN `cjDropShippingId` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `Product_amazonProductId_idx` ON `Product`(`amazonProductId`);

-- CreateIndex
CREATE INDEX `Product_cjDropShippingId_idx` ON `Product`(`cjDropShippingId`);
