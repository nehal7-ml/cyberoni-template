/*
  Warnings:

  - You are about to drop the column `dimensionsId` on the `Supplier` table. All the data in the column will be lost.
  - You are about to drop the `Dimensions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `height` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `length` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Supplier_dimensionsId_idx` ON `Supplier`;

-- AlterTable
ALTER TABLE `Supplier` DROP COLUMN `dimensionsId`,
    ADD COLUMN `height` INTEGER NOT NULL,
    ADD COLUMN `length` INTEGER NOT NULL,
    ADD COLUMN `weight` INTEGER NOT NULL,
    ADD COLUMN `width` INTEGER NOT NULL;

-- DropTable
DROP TABLE `Dimensions`;
