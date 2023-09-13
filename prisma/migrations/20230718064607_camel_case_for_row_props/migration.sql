/*
  Warnings:

  - You are about to drop the column `display_price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_breakdown` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `profit_margin` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `shipping_return_policy` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `hourly_rate` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `skills_used` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `value_brought` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `supplier_written_comments` on the `Supplier` table. All the data in the column will be lost.
  - Added the required column `displayPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profitMargin` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingReturnPolicy` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hourlyRate` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skillsUsed` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valueBrought` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `display_price`,
    DROP COLUMN `product_breakdown`,
    DROP COLUMN `profit_margin`,
    DROP COLUMN `shipping_return_policy`,
    ADD COLUMN `displayPrice` INTEGER NOT NULL,
    ADD COLUMN `productBreakdown` VARCHAR(191) NULL,
    ADD COLUMN `profitMargin` INTEGER NOT NULL,
    ADD COLUMN `shippingReturnPolicy` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Service` DROP COLUMN `hourly_rate`,
    DROP COLUMN `skills_used`,
    DROP COLUMN `value_brought`,
    ADD COLUMN `hourlyRate` INTEGER NOT NULL,
    ADD COLUMN `skillsUsed` VARCHAR(191) NOT NULL,
    ADD COLUMN `valueBrought` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Supplier` DROP COLUMN `supplier_written_comments`,
    ADD COLUMN `supplierWrittenComments` VARCHAR(191) NULL;
