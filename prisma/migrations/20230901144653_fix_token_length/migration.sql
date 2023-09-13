-- DropIndex
DROP INDEX `ApiCredentials_token_key` ON `ApiCredentials`;

-- AlterTable
ALTER TABLE `ApiCredentials` MODIFY `token` TEXT NOT NULL;
