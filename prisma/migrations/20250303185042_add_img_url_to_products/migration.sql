/*
  Warnings:

  - Added the required column `imgUrl` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `imgUrl` VARCHAR(255) NOT NULL;
